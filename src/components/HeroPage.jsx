import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroPage.css";

const HeroPage = () => {
  return (
    <div className="hero-container">
      <h1>Welcome to Clement's Super Blog</h1>
      <p>
        The best place to read about Music, Innovation and travelling
      </p>
      <Link to="/blogs" className="btn">
        Explore Blogs
      </Link>
    </div>
  );
};

export default HeroPage;
