import React from "react";
import { Link } from "react-router-dom";
import "../styles/headers.css";

const Headers = () => {
  return (
    <div className="headers">
      <div>TMDB APIs APP</div>
      <div className="home">
        <Link to="/">
          <i className="bi bi-house-door-fill"></i>
        </Link>
      </div>
    </div>
  );
};

export default Headers;
