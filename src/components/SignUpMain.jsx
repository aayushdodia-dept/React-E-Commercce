import React, { useState } from "react";

function SignUpMain() {
  // const [isSignIn, setIsSignIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // const [login, setLogin] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({});
  // const [message, setMessage] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!signUp.email) newErrors.email = "Enter your email";
    if (!signUp.firstName) newErrors.firstName = "Enter your first name";
    if (!signUp.lastName) newErrors.lastName = "Enter your last name";
    else if (!/\S+@\S+\.\S+/.test(signUp.email))
      newErrors.email = "Email is invalid";
    if (!signUp.password) newErrors.password = "Enter your password";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   const handleChange = (field, value) => {
    setSignUp({ ...signUp, [field]: value });

    // Remove error for the field if user corrects it
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!validate()) return;

    localStorage.setItem("user", JSON.stringify(signUp));
    // setMessage("Registered successfully! Please Sign In");
    setSignUp({ firstName: "", lastName: "", email: "", password: "" });
    // setIsSignIn(false);
  };

  // const handleSignIn = (e) => {
  //   e.preventDefault();
  //   const storedData = JSON.parse(localStorage.getItem("user"));
  //   if (
  //     storedData &&
  //     login.email === storedData.email &&
  //     login.password === storedData.password
  //   ) {
  //     setMessage(`Welcome back, ${storedData.firstName}!`);
  //   } else {
  //     setMessage("Invalid email of password");
  //   }
  // };

  return (
    <div>
      <main>
        <section className="my-lg-7">
          <div className="container">
            <div class="justify-content-center align-items-center row">
              <div class="col-lg-4 col-md-6 col-12 order-lg-1 order-2">
                <img
                  src="/main-container-images/signup-g.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div class="col-lg-4 col-md-6 col-12 order-lg-2 offset-lg-1 order-1">
                <div class="mb-lg-9 mb-5">
                  <h1 class="mb-1 h2 fw-bold">Get Start Shopping</h1>
                  <p>Welcome to FreshCart! Enter your email to get started.</p>
                </div>
                <form class="needs-validation" onSubmit={handleSignUp}>
                  <div class="g-3 row">
                    <div class="col">
                      <label
                        class="visually-hidden form-label"
                        for="formSignupfname"
                      >
                        First Name
                      </label>
                      <input
                        placeholder="First Name"
                        id="formSignupfname"
                        class="form-control"
                        type="text"
                        name="firstName"
                        fdprocessedid="aho8gj"
                        value={signUp.firstName}
                        onChange={(e) =>
                          handleChange( "firstName", e.target.value )
                        }
                      />
                      {errors.firstName && (
                        <p className="text-danger">{errors.firstName}</p>
                      )}
                    </div>
                    <div class="col">
                      <label
                        class="visually-hidden form-label"
                        for="formSignuplname"
                      >
                        Last Name
                      </label>
                      <input
                        placeholder="Last Name"
                        value={signUp.lastName}
                        id="formSignuplname"
                        class="form-control"
                        type="text"
                        name="lastName"
                        fdprocessedid="86hxyc"
                        onChange={(e) =>
                          handleChange( "lastName", e.target.value )
                        }
                      />
                      {errors.lastName && (
                        <p className="text-danger">{errors.lastName}</p>
                      )}
                    </div>
                    <div class="col-12">
                      <label
                        class="visually-hidden form-label"
                        for="formSignupEmail"
                      >
                        Email address
                      </label>
                      <input
                        placeholder="Email"
                        value={signUp.email}
                        id="formSignupEmail"
                        class="form-control"
                        type="text"
                        name="email"
                        fdprocessedid="bo405"
                        onChange={(e) =>
                          handleChange( "email", e.target.value )
                        }
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                    <div class="col-12">
                      <label
                        class="visually-hidden form-label"
                        for="formSignupPassword"
                      >
                        Password
                      </label>
                      <div class="password-field position-relative">
                        <input
                          placeholder="*****"
                          value={signUp.password}
                          id="formSignupPassword"
                          class="fakePassword form-control"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          fdprocessedid="ap8du"
                          onChange={(e) =>
                            handleChange( "password", e.target.value )
                          }
                        />
                        {errors.password && (
                          <p className="text-danger">{errors.password}</p>
                        )}
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          className="position-absolute"
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            userSelect: "none",
                          }}
                          >
                          {showPassword ? (
                            <span className="material-symbols-outlined">
                              visibility
                            </span>
                          ) : (
                            <span className="material-symbols-outlined">
                              visibility_off
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                    <div class="d-grid col-12">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        fdprocessedid="56gh4k"
                      >
                        Register
                      </button>
                    </div>
                    <p>
                      <small>
                        By continuing, you agree to our
                        <a href="#!" className="signin-text">
                          {" "}
                          Terms of Service
                        </a>{" "}
                        &amp;
                        <a href="#!" className="signin-text">
                          {" "}
                          Privacy Policy
                        </a>
                      </small>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUpMain;
