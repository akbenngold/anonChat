import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Share Anonymously </h1>
            <p className="py-6">
              Our platform allows you to share and receive opinions, questions,
              media etc without revealing your identity. <br /> Privacy is our
              priority.
            </p>
            <Link to="/login">
              {" "}
              <button className="btn bg-purple-700 text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
