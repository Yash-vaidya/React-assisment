import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg p-4 rounded-4 login-card">
            <h3 className="text-center mb-4">Login</h3>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter your password"
            />

            <button className="btn w-100 login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
