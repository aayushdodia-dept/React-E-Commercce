import React from "react";

function ForgotPassword() {
  return (
    <div>
      <main>
        <section className="my-lg-14">
          <div className="container">
            <div className="justify-content-center align-items-center row">
              <div className="col-lg-4 col-md-6 col-12 order-2 order-lg-1">
                <img
                  src="/main-container-images/fp-g.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="d-flex align-items-center col-lg-4 col-md-6 col-12 order-lg-2 order-1 offset-lg-1">
                <div>
                  <div className="mb-lg-9 md-5">
                    <h1 className="mb-2 h2 fw-bold">Forgot your password</h1>
                    <p>
                      Please enter the email address associated with your
                      account and We will email you a link to reset your
                      password.
                    </p>
                  </div>
                  <form action="#">
                    <div className="g-3 row">
                      <div className="col-12">
                        <label
                          className="visually-hidden form-label"
                          htmlFor="formForgetEmail"
                        >
                          Email address
                        </label>
                        <input
                          placeholder="Email"
                          type="email"
                          name="email"
                          id="formForgetEmail"
                          className="form-control"
                        />
                      </div>
                      <div className="d-grid gap-2 col-12">
                        <button type="submit" className="btn btn-primary">
                          Reset Password
                        </button>
                        <a
                          href="/signin"
                          className="btn btn-white back-btn"
                          role="button"
                        >
                          Back
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ForgotPassword;
