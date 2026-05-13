import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart({ isOpen, toggleCart }) {
  const { cart, total, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={toggleCart}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1040,
          }}
        />
      )}

      {/* Cart Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "420px",
          maxWidth: "100vw",
          backgroundColor: "#fff",
          zIndex: 1050,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start p-4 border-bottom">
          <div>
            <h5 className="mb-0 fw-bold">Shop Cart</h5>
            <small className="text-muted">Location in 382480</small>
          </div>
          <button onClick={toggleCart} className="btn-close" aria-label="Close" />
        </div>

        {cart.length === 0 ? (
          /* ── EMPTY STATE ── */
          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-muted px-4">
            <span className="material-symbols-outlined mb-3" style={{ fontSize: "4rem", color: "#ccc" }}>
              shopping_bag
            </span>
            <h6 className="fw-semibold text-dark">Your cart is empty</h6>
            <p className="text-center" style={{ fontSize: "0.875rem" }}>
              Looks like you haven't added anything yet.
            </p>
            <button className="btn btn-success mt-2" onClick={toggleCart}>
              Start Shopping
            </button>
          </div>
        ) : (
          /* ── ITEMS STATE ── */
          <>
            {/* Free delivery banner */}
            <div className="px-4 pt-3">
              <div
                className="rounded p-2 d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#fde8e8", fontSize: "0.9rem" }}
              >
                <span>
                  You've got FREE delivery. Start{" "}
                  <strong className="text-danger">checkout now!</strong>
                </span>
                <button className="btn-close btn-close-sm ms-2" style={{ fontSize: "0.6rem" }} />
              </div>
            </div>

            {/* Cart Items — scrollable */}
            <div className="flex-grow-1 overflow-auto px-4 py-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom"
                >
                  <img
                    src={item.images}
                    alt={item.title}
                    style={{ width: 60, height: 60, objectFit: "contain" }}
                  />
                  <div className="flex-grow-1">
                    <div className="fw-semibold" style={{ fontSize: "0.9rem" }}>
                      {item.title}
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                      .98 / lb
                    </div>
                    <button
                      className="border-0 bg-white text-danger p-0 mt-1 cursor-pointer"
                      style={{ fontSize: "0.8rem" }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <span
                        className="material-symbols-outlined color-primary"
                        style={{ fontSize: "0.9rem", verticalAlign: "middle" }}
                      >
                        delete
                      </span>{" "}
                      Remove
                    </button>
                  </div>

                  {/* Quantity controls */}
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      style={{ width: 28, height: 28, padding: 0, lineHeight: 1 }}
                      onClick={() =>
                        item.quantity > 1
                          ? updateQuantity(item.id, item.quantity - 1)
                          : removeFromCart(item.id)
                      }
                    >
                      -
                    </button>
                    <span style={{ minWidth: 20, textAlign: "center" }}>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      style={{ width: 28, height: 28, padding: 0, lineHeight: 1 }}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="fw-semibold" style={{ minWidth: 55, textAlign: "right" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Buttons — only shown when cart has items */}
            <div className="p-4 border-top d-flex gap-3">
              <button className="btn btn-success flex-grow-1" onClick={toggleCart}>
                Continue Shopping
              </button>
              <button className="btn btn-dark flex-grow-1" onClick={() => {toggleCart(); navigate("/checkout");}}>
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;