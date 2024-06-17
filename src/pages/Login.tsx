import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">Check your messages</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <p className="mb-6">Sign Up with</p>
            <div className="flex justify-evenly mb-6">
              <FaGoogle size="2rem" color="#6d28d9" />
              <FaXTwitter size="2rem" color="#6d28d9" />
              <FaFacebookF size="2rem" color="#6d28d9" />
            </div>
            <p>or</p>
            <form className="card-body ">
              <div className="form-control mb-8 ">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-700 text-white">Login</button>
              </div>
            </form>
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-purple-700">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
