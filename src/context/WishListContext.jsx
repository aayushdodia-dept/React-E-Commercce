import { createContext, useCallback, useState, useContext, useEffect } from "react";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);
  const [wishlistToast, setWishlistToast] = useState({
    show: false,
    message: "",
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList))
  }, [wishList])

  const showWishlistToast = useCallback((message) => {
    setWishlistToast({ show: true, message });
  }, []);
  const hideWishlistToast = useCallback(() => {
    setWishlistToast({ show: false, message: "" });
  }, []);

  const addToWishlist = useCallback(
    (product) => {
      setWishList((prev) => {
        const exists = prev.find((item) => item.id === product.id);
        if (exists) {
          showWishlistToast("Product is already in wishlist!");
          return [...prev];
        }
        showWishlistToast("Product added to wishlist!");
        return [...prev, product];
      });
    },
    [showWishlistToast],
  );

  const removeFromWishlist = useCallback(
    (id) => {
      setWishList((prev) => {
        const item = [prev ?? []].find((i) => i.id === id);
        showWishlistToast(`${item?.title || "Item"} removed from wishlist!`);
        return (prev ?? []).filter((i) => i.id !== id);
      });
    },
    [showWishlistToast],
  );

  const isInWishlist = useCallback(
    (id) => [wishList ?? []].some((item) => item.id === id),
    [wishList],
  );

  return (
    <WishListContext.Provider
      value={{
        wishList,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistToast,
        hideWishlistToast,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);
