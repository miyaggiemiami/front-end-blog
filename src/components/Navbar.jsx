import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/blogs" className="nav-link">
        Blogs
      </Link>
      <Link to="/new-post" className="nav-link">
        Post
      </Link>
    </nav>
  );
};

export default Navbar;
