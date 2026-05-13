import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="py-0 pb-lg-3 navbar-default navbar navbar-expand-lg navbar-light border-bottom">
      <div className="container">
        <div className="offcanvas-lg">
          <div className="offcanvas-body">
            <div className="me-1 d-none d-lg-block menu align-items-start">
              <div className="nav-link-wrapper">
                <button
                  id="dropdownMenuButton1"
                  type="button"
                  className="btn btn-primary d-flex align-items-center gap-2 fw-semibold dashboard-btn mt-1"
                  aria-haspopup="true"
                >
                  <img
                    src="/header-images/dashboard.png"
                    className="dashboard-img"
                    alt="dashboard"
                  />
                  All Departments
                </button>
                <ul className="dropdown-content">
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

            <div className="navbar-nav d-flex flex-row align-items-center gap-1">
              <div className="menu">
                <div className="nav-link-wrapper">
                  <a
                    href="#"
                    role="button"
                    className="nav-link d-flex align-items-center navlinks-btn dropdown"
                  >
                    Home <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-content">
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

              <div className="w-100 w-lg-auto nav-item dropdown menu">
                <div className="nav-link-wrapper">
                  <a
                    href="#"
                    role="button"
                    className="nav-link d-flex align-items-center navlinks-btn"
                  >
                    Shop <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-content">
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

              <div className="w-100 w-lg-auto nav-item dropdown menu">
                <div className="nav-link-wrapper">
                  <a
                    href="#"
                    role="button"
                    className="nav-link d-flex align-items-center navlinks-btn"
                  >
                    Stores <i className="fa-solid fa-angle-down ms-2"></i>
                  </a>
                  <ul className="dropdown-content">
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

              <div className="w-100 w-lg-auto nav-item dropdown">
                <div className="nav-link-wrapper">
                  <a
                    href="#"
                    role="button"
                    className="nav-link d-flex align-items-center navlinks-btn dropdown-toggle-btn"
                    aria-expanded="true"
                  >
                    Mega&nbsp;menu <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <div className="col-12 col-lg-12 col-md-12">
                    <div className="g-4 row dropdown-content dropdown-grid mega-menu">
                      <div className="col-md-3 col-sm-6 col-12">
                        <h6>Dairy, Bread & Eggs</h6>
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
                      <div className="col-md-3 col-sm-6 col-12">
                        <h6>Dairy, Bread & Eggs</h6>
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
                      <div className="col-md-3 col-sm-6 col-12">
                        <h6>Dairy, Bread & Eggs</h6>
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
                      <div className="col-md-3 col-sm-6 col-12">
                        <li>
                          <div className="menu-banner img-fluid">
                            <h5 className="text-dark">
                              Dont miss this
                              <br /> offer today
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
                    </div>
                  </div>
                  {/* <ul className="dropdown-content dropdown-grid d-flex mega-menu container">
                    <div className="row gy-0 gx-0 pt-4">
                      <h6>Dairy, Bread & Eggs</h6>
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
                    <div className="row pt-4">
                      <h6>Dairy, Bread & Eggs</h6>
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
                    <div className="row pt-4">
                      <h6>Dairy, Bread & Eggs</h6>
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
                    <div className="row pt-4">
                      <li>
                        <img
                          src="images/menu-banner.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="menu-banner img-fluid">
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
                  </ul> */}
                </div>
              </div>
              <div className="w-100 w-lg-auto nav-item dropdown menu">
                <div className="nav-link-wrapper">
                  <a
                    href="#"
                    role="button"
                    tabIndex="0"
                    className="nav-link d-flex align-items-center navlinks-btn"
                    aria-expanded="true"
                  >
                    Account<i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-content">
                    <li>
                      <a href="/signin">Sign In</a>
                    </li>
                    <li>
                      <a href="/signup">Sign Up</a>
                    </li>
                    <li>
                      <a href="/forgot-password">Forgot Password</a>
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
              <div className="w-100 w-lg-auto nav-item dropdown menu">
                <div className="nav-link-wrapper">
                  <a
                    href="#"
                    role="button"
                    className="nav-link d-flex align-items-center navlinks-btn"
                    aria-expanded="false"
                  >
                    Pages <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-content">
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
              <div className="w-100 w-lg-auto nav-item dropdown">
                <a
                  href="#"
                  role="button"
                  className="nav-link d-flex align-items-center navlinks-btn"
                  aria-expanded="false"
                >
                  Dashboard
                </a>
              </div>
              <div className="w-100 w-lg-auto nav-item dropdown menu">
                <div className="nav-link-wrapper">
                  <a
                    href="#"
                    role="button"
                    className="nav-link d-flex align-items-center navlinks-btn"
                    aria-expanded="false"
                  >
                    Docs
                  </a>
                  <ul className="dropdown-content">
                    <li>
                      <a href="#">
                        <div className="docs d-flex px-2 py-1">
                          <i className="fa-regular fa-file mt-1"></i>
                          <div className="ms-3">
                            <h6 className="mb-1 text-dark">Documentation</h6>
                            <p className="mb-0 small">
                              Browse the all documentation
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="docs d-flex px-2 py-1">
                          <i className="fa-solid fa-layer-group mt-1"></i>
                          <div className="ms-3">
                            <h6 className="mb-1 text-dark">Changelog v1.1.0</h6>
                            <p className="mb-0 small">
                              Browse the all documentation
                            </p>
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
    </div>
  );
}

export default Navbar;
