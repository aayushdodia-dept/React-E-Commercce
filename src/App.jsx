import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import ToggleMenu from "./components/ToggleMenu";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignUpHeader from "./components/SignUpHeader";
import ForgotPassword from "./components/ForgotPassword";
import SignInModal from "./components/SignInModal";
import Cart from "./components/Cart";
import Toast from "./components/Toast";
import { useCart } from "./context/CartContext";
import WishList from "./components/WishList";
import { useWishList } from "./context/WishListContext";
import ProductPage from "./components/ProductPage";
import ProductDetail from "./components/ProductDetail";
import ShopPage from "./components/ShopPage";
import LocationModal from "./components/LocationModal";
import Checkout from "./components/Checkout";

// const btnClose = document.querySelector(".btn-close");
// const offCanvas = document.querySelector(".toggle-menu");
// const menuBtn = document.querySelector(".menu-open")
// const btn = document.querySelector(".toggle-btn")
// const dropdown = document.querySelector(".submenu-wrapper")

// menuBtn.addEventListener("click", () => {
//   offCanvas.classList.add("add");
// })

// btnClose.addEventListener("click", () => {
//   offCanvas.classList.remove("add");
//   console.log("click")
// })

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [toast, setToast] = useState({ show: false, message: "" });
  const location = useLocation();
  const { toast, hideToast } = useCart();
  const { wishlistToast, hideWishlistToast } = useWishList();

  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const toggleLocation = () => {
    setIsLocationOpen((prev) => !prev);
  };

  const isSignUpPage =
    location.pathname === "/signup" ||
    location.pathname === "/signin" ||
    location.pathname === "/forgot-password";

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    console.log("clicked");
  };

  const toggleSignIn = () => {
    setIsSignInOpen((prev) => !prev);
    console.log("clicked");
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // const showToast = (message) => {
  //   setToast({show: true, message});
  // }

  // const hideToast = () => {
  //   setToast({show: false, message: ""});
  // }

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        {isSignUpPage ? (
          <SignUpHeader />
        ) : (
          <Header
            toggleMenu={toggleMenu}
            toggleSignIn={toggleSignIn}
            toggleCart={toggleCart}
            toggleLocation={toggleLocation}
            selectedLocation={selectedLocation}
          />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/prod-page" element={<ProductPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {/* <Main /> */}
        <Footer />
        {/* {true && <ToggleMenu />} */}
        <ToggleMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <SignInModal isOpen={isSignInOpen} toggleSignIn={toggleSignIn} />
        <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
        <Toast message={toast.message} show={toast.show} onHide={hideToast} />
        <Toast message={toast.message} show={toast.show} onHide={hideToast} />
        <Toast
          message={wishlistToast.message}
          show={wishlistToast.show}
          onHide={hideWishlistToast}
        />

        <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} onSelectLocation={(loc) => setSelectedLocation(loc)} />
      </div>
    </div>
  );
}

export default App;
