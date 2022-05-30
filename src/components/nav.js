import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="menu">
      <Link id="home-page-link" to="/long-list_bad-perf">
        Long Lists
      </Link>
      <Link id="home-page-link" to="/useless-renders">
        Useless Rendering
      </Link>
      <Link id="home-page-link" to="/loading-images-slow">
        Loading Images
      </Link>
    </div>
  );
}
