import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/NewPostForm.css";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [profilepic, setProfilepic] = useState(null);
  const [background, setBackground] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("author", author);
    if (profilepic) formData.append("profilepic", profilepic);
    if (background) formData.append("background", background);

    api
      .post("/posts", formData)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error adding post:", error));
  };

  return (
    <div className="formcontainer">
      <h1 className="title">New Post</h1>
      <form
        onSubmit={handleSubmit}
        className="new-post-form"
        encType="multipart/form-data"
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="profilepic">Profile Picture</label>
          <input
            type="file"
            id="profilepic"
            onChange={(e) => setProfilepic(e.target.files[0])}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="background">Background Image</label>
          <input
            type="file"
            id="background"
            onChange={(e) => setBackground(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
