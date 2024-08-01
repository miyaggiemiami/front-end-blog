import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import profile from "../images/myself.JPG"

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="homecontainer">
      <h1 className="title">Blog Posts</h1>
      <div className="profile-pic">
        <img src={profile} alt="pic" />
      </div>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <div className="background-card">
              <img
                src={post.background}
                alt="Background"
                className="background-pic"
              />
              <button className="post-link">
                <Link to={`/posts/${post.id}`} className="post-link-text">
                  {post.title}
                </Link>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="new-post-link">
        <Link to="/new-post" className="new-link-text">
          Add Post
        </Link>
      </button>
    </div>
  );
};

export default HomePage;
