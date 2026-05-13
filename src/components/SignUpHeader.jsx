import React from "react";
import "../App.css";

function SignUpHeader() {
  return (
    <div>
      <div className="border-bottom shadow-sm">
        <nav className="py-2 navbar navbar-light">
          <div className="justify-content-center justify-content-lg-between container">
            <a href="/" className="d-inline-block align-text-top navbar-brand">
              <img src="/header-images/freshcart-logo.svg" alt="Fresh Cart" />
            </a>
            <span className="navbar-text">
              Already have an account?
              <a href="/signin" className="text-decoration-none">
                Sign In
              </a>
            </span>
          </div>
        </nav>
      </div>

      
    </div>
  );
}

export default SignUpHeader;
