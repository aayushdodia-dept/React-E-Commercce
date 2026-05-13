import React from "react";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" role="button">
                    Home
                  </Link>
                </li>{" "}
                <li className="breadcrumb-item">Shop</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mt-8 mb-lg-14 mb-8">
        <div className="gx-10 row"></div>
      </div>
    </>
  );
}

export default ProductPage;
