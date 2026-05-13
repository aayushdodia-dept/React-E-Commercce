import React from "react";
import { useCart } from "../context/CartContext";
import { useWishList } from "../context/WishListContext";
import { Link } from "react-router-dom";

function SearchBar({ toggleSignIn, toggleMenu, toggleCart, toggleLocation, selectedLocation }) {
  const { cart } = useCart();
  const cartCount = cart?.reduce((sum, item) => sum + item.quantity, 0);

  const { wishList } = useWishList();
  const wishListCount = wishList?.length ?? 0;
  return (
    <div className="py-41">
      <div className="container">
        <div className="w-100 align-items-center gx-0 row row1 px-lg-2 gx-0">
          <div className="col-xxl-2 col-lg-3 col-md-6 col-5">
            <Link to="/" className="d-none d-lg-block navbar-brand">
              <img src="/header-images/freshcart-logo.svg" alt="Fresh Cart" />
            </Link>
            <div className="d-flex justify-content-between w-100 d-lg-none">
              <a className="navbar-brand" href="/">
                <img src="/header-images/freshcart-logo.svg" alt="Fresh Cart" />
              </a>
            </div>
          </div>
          <div className="d-none d-lg-block col-xxl-5 col-lg-5 d-none-1">
            <form>
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Search for products"
                  className="form-control search-input"
                />
                <span className="input-group-append">
                  <button
                    type="button"
                    className="border border-start-0 ms-n10 rounded-0 rounded-end btn"
                    
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div className="d-none d-lg-block col-xxl-3 col-md-2 d-none-1">
            <button className="location-btn" onClick={toggleLocation}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-1"
                style={{ color: "#8e9291" }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {selectedLocation ?? "Location"}
            </button>
          </div>
          <div className="text-end col-lg-2 p-0 col-xxl-2 col-md-6 d-none-1 col-7">
            <div className="list-inline">
              <div
                role="button"
                className="me-3 text-muted position-relative list-inline-item"
              >
                <Link
                  to="/wishlist"
                  className="text-muted position-relative list-inline-item"
                >
                  <span className="fav material-symbols-outlined">
                    favorite
                  </span>

                  <span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {wishListCount}
                  </span>
                </Link>
              </div>
              <div
                className="text-muted list-inline-item me-3"
                role="button"
                onClick={toggleSignIn}
              >
                <span className="fav material-symbols-outlined">person</span>
              </div>
              <div
                className="me-3 me-lg-0 text-muted position-relative list-inline-item"
                role="button"
                onClick={toggleCart}
              >
                <span className="fav material-symbols-outlined">
                  shopping_bag
                </span>

                <span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {cartCount}
                </span>
              </div>
              <div
                className="d-lg-none list-inline-item menu-icon"
                role="button"
              >
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  onClick={toggleMenu}
                >
                  <span className="material-symbols-outlined menu-open">
                    menu_open
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
