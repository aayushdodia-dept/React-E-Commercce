import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WishListProvider } from "./context/WishListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishListProvider>
          <App />
        </WishListProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
