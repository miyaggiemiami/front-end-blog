import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroPage.css";
import profile from "../images/myself.JPG"


const HeroPage = () => {
  return (
    <div className="hero-container">
      <div className="profile-pic">
        <img className="pro-pic" src={profile} alt="pic" />
      </div>
      <h1>Engage content, insights, and stories with Clement. ☕️💻📖</h1>
      <div className="description">
      <p>Discover the ultimate hub for curious minds, where coding, melodies, innovation, and wanderlust converge in perfect harmony, fueling your passions.</p>
      </div>
      <Link to="/blogs" className="btn">
        Explore Blogs
      </Link>
    </div>
  );
};

export default HeroPage;
