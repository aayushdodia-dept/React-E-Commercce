import React, { useEffect } from "react";
import {Link} from "react-router-dom";

function ToggleMenu({menuOpen, toggleMenu}) {
  useEffect(() => {
    if(menuOpen){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen])

  return (
    <>
    {/* Overlay */}
    <div className={`overlay d-lg-none ${menuOpen ? "show" : ""}`} onClick={toggleMenu}></div>

    
    <div className={`toggle-menu d-lg-none ${menuOpen ? "add" : ""}`}>
      <div className="logo d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <img src="/header-images/freshcart-logo.svg" alt="Fresh Cart" />
        </a>
        <button className="btn btn-close" onClick={toggleMenu}></button>
      </div>
      <div className="d-block d-lg-none col-lg-5">
        <form>
          <div className="input-group py-3">
            <input
              type="search"
              placeholder="Search for products"
              className="form-control search-input border-end"
            />
            <span className="input-group-append">
              <button
                type="button"
                className="border border-start-0 ms-n10 rounded-0 rounded-end btn"
                style={{ backgroundColor: "white" }}
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
      <div className="me-1 d-block d-lg-none mb-3">
        <div className="dashboard-item">
          <button
            href="#"
            className="w-100 d-flex justify-content-center align-items-center btn btn-primary toggle-btn"
          >
            <img src="/header-images/dashboard.png" className="me-2" alt="dashboard" />
            All Departments
          </button>
          <div className="submenu-wrapper">
            <div className="submenu">
              <ul className="dropdown-content1">
                <li>
                  <a href="#">Dairy, Bread & Eggs</a>
                </li>
                <li>
                  <a href="#">Snacks & Munchies</a>
                </li>
                <li>
                  <a href="#">Fruits & Vegetables</a>
                </li>
                <li>
                  <a href="#">Cold Drinks & Juices</a>
                </li>
                <li>
                  <a href="#">Breakfast & Instant Food</a>
                </li>
                <li>
                  <a href="#">Bakery & Biscuits</a>
                </li>
                <li>
                  <a href="#">Chicken, Meat & Fish</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="align-items-center navbar-nav">
          <div className="w-100 w-lg-auto nav-item dropdown dashboard-item">
            <a href="#" role="button" className="navbar toggle-btn">
              Home
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </a>
            <div className="submenu-wrapper">
              <div className="submenu">
                <ul className="dropdown-content1">
                  <li>
                    <a href="#">Home Default</a>
                  </li>
                  <li>
                    <a href="#">Home Modern</a>
                  </li>
                  <li>
                    <a href="#">Home Creative</a>
                  </li>
                  <li>
                    <a href="#">Home Local Store</a>
                  </li>
                  <li>
                    <a href="#">Home Minimalist</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-100 w-lg-auto nav-item dropdown dashboard-item">
            <a href="#" role="button" className="navbar toggle-btn">
              Shop
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </a>
            <div className="submenu-wrapper">
              <div className="submenu">
                <ul className="dropdown-content1">
                  <li>
                    <a href="#">Shop Grid - Filter</a>
                  </li>
                  <li>
                    <a href="#">Shop Grid - 3 column</a>
                  </li>
                  <li>
                    <a href="#">Shop List - Filter</a>
                  </li>
                  <li>
                    <a href="#">Shop Filter</a>
                  </li>
                  <li>
                    <a href="#">Shop Wide</a>
                  </li>
                  <li>
                    <a href="#">Shop Single</a>
                  </li>
                  <li>
                    <a href="#">Shop Single v2</a>
                  </li>
                  <li>
                    <a href="#">Shop Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Shop Cart</a>
                  </li>
                  <li>
                    <a href="#">Shop Checkout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-100 w-lg-auto nav-item dropdown dashboard-item">
            <a href="#" role="button" className="navbar toggle-btn">
              Stores
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </a>
            <div className="submenu-wrapper">
              <div className="submenu">
                <ul className="dropdown-content1">
                  <li>
                    <a href="#">Store list-inline</a>
                  </li>
                  <li>
                    <a href="#">Store Grid</a>
                  </li>
                  <li>
                    <a href="#">Store Single</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-100 w-lg-auto nav-item dropdown dashboard-item">
            <a href="#" role="button" className="navbar toggle-btn">
              Mega Menu
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </a>
            <div className="submenu-wrapper submenu-wrapper1">
              <div className="submenu">
                <ul className="dropdown-content1">
                  <div className="row gy-0 gx-0 mt-3">
                    <h6 className="btn-green">Dairy, Bread & Eggs</h6>
                    <li>
                      <a href="#">Butter</a>
                    </li>
                    <li>
                      <a href="#">Milk Drinks</a>
                    </li>
                    <li>
                      <a href="#">Curd & Yogurt</a>
                    </li>
                    <li>
                      <a href="#">Eggs</a>
                    </li>
                    <li>
                      <a href="#">Buns & Bakery</a>
                    </li>
                    <li>
                      <a href="#">Cheese</a>
                    </li>
                    <li>
                      <a href="#">Condensed Milk</a>
                    </li>
                    <li>
                      <a href="#">Dairy Products</a>
                    </li>
                  </div>
                  <div className="row mt-3">
                    <h6 className="btn-green">Dairy, Bread & Eggs</h6>
                    <li>
                      <a href="#">Butter</a>
                    </li>
                    <li>
                      <a href="#">Milk Drinks</a>
                    </li>
                    <li>
                      <a href="#">Curd & Yogurt</a>
                    </li>
                    <li>
                      <a href="#">Eggs</a>
                    </li>
                    <li>
                      <a href="#">Buns & Bakery</a>
                    </li>
                    <li>
                      <a href="#">Cheese</a>
                    </li>
                    <li>
                      <a href="#">Condensed Milk</a>
                    </li>
                    <li>
                      <a href="#">Dairy Products</a>
                    </li>
                  </div>
                  <div className="row mt-3">
                    <h6 className="btn-green">Dairy, Bread & Eggs</h6>
                    <li>
                      <a href="#">Butter</a>
                    </li>
                    <li>
                      <a href="#">Milk Drinks</a>
                    </li>
                    <li>
                      <a href="#">Curd & Yogurt</a>
                    </li>
                    <li>
                      <a href="#">Eggs</a>
                    </li>
                    <li>
                      <a href="#">Buns & Bakery</a>
                    </li>
                    <li>
                      <a href="#">Cheese</a>
                    </li>
                    <li>
                      <a href="#">Condensed Milk</a>
                    </li>
                    <li>
                      <a href="#">Dairy Products</a>
                    </li>
                  </div>
                  <div className="row mt-3">
                    <li>
                      {/* <!-- <img src="images/menu-banner.jpg" alt="" className="img-fluid"> --> */}
                      <div className="menu-banner img-fluid banner-btn">
                        <h5 className="text-dark">
                          Dont miss this
                          <br />
                          offer today
                        </h5>
                        <a
                          href="#"
                          role="button"
                          className="btn btn-primary menu-btn p-1 mt-3 text-center text-light fs-8"
                        >
                          Shop Now
                        </a>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-100 w-lg-auto nav-item dropdown dashboard-item">
            <a href="#" role="button" className="navbar toggle-btn">
              Account
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </a>
            <div className="submenu-wrapper">
              <div className="submenu">
                <ul className="dropdown-content1">
                  <li>
                    <Link to="/signin">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <a href="#">Forgot Password</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex justify-content-between align-items-center"
                    >
                      My Account <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-100 w-lg-auto nav-item dropdown dashboard-item">
            <a href="#" role="button" className="navbar toggle-btn">
              Pages
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </a>
            <div className="submenu-wrapper">
              <div className="submenu">
                <ul className="dropdown-content1">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Blog Single</a>
                  </li>
                  <li>
                    <a href="#">Blog Category</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">404 Error</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-100 w-lg-auto nav-item dropdown">
            <a href="#" role="button" className="navbar toggle-btn">
              Dashboard
            </a>
          </div>
          <div className="w-100 w-lg-auto nav-item dropdown dashboard-item">
            <a href="#" role="button" className="navbar">
              Docs
            </a>
            <div className="submenu-wrapper">
              <div className="submenu submenu1">
                <ul className="dropdown-content1">
                  <li>
                    <a href="#">
                      <div className="docs d-flex px-2 py-1">
                        <i className="fa-regular fa-file mt-1"></i>
                        <div className="ms-3">
                          <h6 className="mb-1 text-dark">Documentation</h6>
                          <p className="mb-0 small">Browse the all documentation</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="docs d-flex px-2 py-1">
                        <i className="fa-solid fa-layer-group mt-1"></i>
                        <div className="ms-3">
                          <h6 className="mb-1 text-dark">Changelog v1.1.0</h6>
                          <p className="mb-0 small">Browse the all documentation</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ToggleMenu;
