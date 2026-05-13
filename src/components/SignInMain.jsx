import React, {useState, useEffect} from "react";

function SignInMain() {
   const [login, setLogin] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Load stored email/password if you want "remember me" behavior
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setLogin({ email: "", password: "" });
    }
  }, []);

  // Handle input changes & clear error for that field
  const handleChange = (field, value) => {
    setLogin({ ...login, [field]: value });
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Validate email/password before login
  const validate = () => {
    const newErrors = {};
    if (!login.email) newErrors.email = "Enter your email";
    if (!login.password) newErrors.password = "Enter your password";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSignIn = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      login.email === storedUser.email &&
      login.password === storedUser.password
    ) {
      setMessage(`✅ Welcome back, ${storedUser.firstName}!`);
      setLogin({ email: "", password: "" }); // <-- reset inputs
    } else {
      setMessage("❌ Invalid email or password.");
      setLogin({ email: "", password: "" }); // reset both inputs
    }
  };
  
  return (
    <div>
      <main>
        <section className="my-lg-7">
          <div className="container">
            <div className="justify-content-center align-items-center row">
              <div className="col-lg-4 col-md-6 col-12 order-lg-1 order-2">
                <img
                  src="/main-container-images/fp-g.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12 order-lg-2 order-1 offset-lg-1">
                <div className="mb-5 mb-lg-9">
                  <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                  <p>
                    Welcome back to FreshCart! Enter your email to get started.
                  </p>
                </div>
                <form className="needs-validation" onSubmit={handleSignIn}>
                  <div className="g-3 row">
                    <div className="col-12">
                      <label
                        className="visually-hidden form-label"
                        htmlFor="formSigninEmail"
                      >
                        Email address
                      </label>
                      <input
                        value={login.email}
                        placeholder="Email"
                        id="formSigninEmail"
                        className="form-control"
                        type="email"
                        name="email"
                        fdprocessedid="4xua9n"
                        onChange={(e) => handleChange("email", e.target.value)}

                      />
                      {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                    <div className="col-12">
                      <div className="password-field position-relative">
                        <label
                          className="visually-hidden form-label"
                          htmlFor="formSigninPassword"
                        >
                          Password
                        </label>
                        <div className="password-field  position-relative">
                          <input
                            value={login.password}
                            placeholder="*****"
                            id="formSigninPassword"
                            className="fakePassword form-control"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            fdprocessedid="l4ewzq"
                            onChange={(e) => handleChange("password", e.target.value)}
                          />
                          {errors.password && <p className="text-danger">{errors.password}</p>}
                          <span onClick={() => setShowPassword(!showPassword)} style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}>
                            {showPassword ? (<span className="material-symbols-outlined">visibility</span>) : (<span className="material-symbols-outlined">visibility_off</span>)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="form-check">
                        <input
                          id="flexCheckDefault"
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label
                          for="flexCheckDefault"
                          className="form-check-label"
                        >
                          Remember me
                        </label>
                      </div>
                      <div>
                        Forgot password?
                        <a href="/forgot-password" className="signin-text">
                          {" "}
                          Reset It
                        </a>
                      </div>
                    </div>
                    <div className="d-grid col-12">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        fdprocessedid="404jw2"
                      >
                        Sign In
                      </button>
                    </div>
                    <div>
                      Don’t have an account?
                      <a href="/signup" className="signin-text">
                        {" "}
                        Sign Up
                      </a>
                    </div>
                    {message && (
                      <p
                        style={{
                          marginTop: "10px",
                          color: message.includes("Invalid") ? "red" : "green",
                        }}
                      >
                        {message}
                      </p>
                    )}
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

export default SignInMain;
