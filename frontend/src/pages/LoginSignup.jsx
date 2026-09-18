import React, { useState } from "react";
import "../Css/LoginSignup.css";

export const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setError("");

    if (!agreed) {
      setError("You must agree to the terms before continuing.");
      return;
    }
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (state === "Sign Up" && !formData.name) {
      setError("Please enter your name.");
      return;
    }

    // ✅ Save to localStorage (frontend-only, not secure for production)
    if (state === "Sign Up") {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Account created! You can now log in.");
      setState("Login");
    } else {
      const saved = JSON.parse(localStorage.getItem("user"));
      if (
        saved &&
        saved.email === formData.email &&
        saved.password === formData.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Logged in successfully!");
        window.location.replace("/");
      } else {
        setError("Invalid email or password.");
      }
    }
  };

  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>{state}</h1>

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <div className="loginSignup-fields">
          {state === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Continue</button>
        </div>

        <p className="loginSignup-login">
          {state === "Sign Up" ? (
            <>
              Already have an account?
              <span onClick={() => setState("Login")}> Login Here</span>
            </>
          ) : (
            <>
              Don't have an account?
              <span onClick={() => setState("Sign Up")}> Sign Up Here</span>
            </>
          )}
        </p>

        <div className="loginSignup-agree">
          <input
            type="checkbox"
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
