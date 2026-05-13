import React from "react";

function UpperHeader() {
  return (
    <div className="bg-light1 py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 text-center text-md-start">
            <span>Super Value Deals - Save more with coupons</span>
          </div>
          <div className="text-end col d-none d-md-block">
            <div className="selectBox dropdown">
              <span role="button" className="text-reset cursor-pointer">
                <img src="/header-images/english.svg" className="me-1" />
                English
                <i className="fa-solid fa-angle-down pt-0 ms-1"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperHeader;
