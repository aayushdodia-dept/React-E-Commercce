import React from "react";

function OfferBanner() {
  return (
    <section className="offer-product container">
      <div className="row">
        <div className="mb-3 col-md-6 mb-lg-0 col-12">
          <div className="grocery-banner-1 rounded">
            <div>
              <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
              <p className="mb-4">
                Get Upto <span className="fw-bold">25%</span> Off
              </p>
              <a role="button" tabIndex="0" href="#!" className="btn btn-dark">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="mb-3 col-md-6 col-12 mb-lg-0">
          <div className="grocery-banner-2 rounded">
            <div>
              <h3 className="fw-bold mb-1">Fruits &amp; Vegetables</h3>
              <p className="mb-4">
                Get Upto <span className="fw-bold">30%</span> Off
              </p>
              <a role="button" tabIndex="0" href="#!" className="btn btn-dark">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferBanner;
