    import React, { createContext, useCallback, useContext, useReducer, useEffect } from "react";

    const CartContext = createContext();

    const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    total: JSON.parse(localStorage.getItem("cartTotal")) || 0,
    };

    function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
        //check if item already exists
        const exists = state.cart.find((item) => item.id === action.payload.id);
        if (exists) {
            //Increase quantity
            return {
            ...state,
            cart: state.cart.map((item) =>
                item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
            total: state.total + action.payload.price,
            };
        }
        //Add a new item
        return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
            total: state.total + action.payload.price * action.payload.quantity,
        };

        case "UPDATE_QUANTITY": {
        const updatedCart = state.cart.map((item) =>
            item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        );
        const newTotal = updatedCart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );
        return {
            ...state,
            cart: updatedCart,
            total: newTotal,
        };
        }

        case "REMOVE_FROM_CART": {
        const itemToRemove = state.cart.find((item) => item.id === action.payload);
        const newCart = state.cart.filter((item) => item.id !== action.payload);
        const newTotal = newCart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );
        return {
            ...state,
            cart: newCart,
            total: newTotal,
        };
        }
        case "CLEAR_CART":
        return { ...state, cart: [], total: 0 };
        default:
        return state;
    }
    }

    export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [toast, setToast] = React.useState({ show: false, message: "" });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("cartTotal", JSON.stringify(state.total));
    }, [state.cart, state.total])

    const showToast = useCallback((message) => {
        setToast({ show: true, message });
    }, []);

    const hideToast = useCallback(() => {
        setToast({show: false, message: ""});
    }, []);

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
        showToast(`${product.title} added to cart`);
    };

    const updateQuantity = (id, quantity) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    };

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    return (
        <CartContext.Provider
        value={{ cart: state.cart, total: state.total, addToCart, removeFromCart, clearCart, updateQuantity, toast, showToast, hideToast }}
        >
        {children}
        </CartContext.Provider>
    );
    }

    export const useCart = () => useContext(CartContext);
