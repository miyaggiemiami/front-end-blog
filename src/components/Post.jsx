import React, { useState, useEffect } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import { formatTimestamp } from "../dateUtils";
import "../styles/Post.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setComments(response.data.comments || []);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!username || !newComment) {
      alert("Both username and comment are required");
      return;
    }

    api
      .post(`/posts/${id}/comments`, { user: username, text: newComment })
      .then((response) => {
        setComments([...comments, response.data]);
        setNewComment("");
        setUsername("");
      })
      .catch((error) => console.error("Error adding comment:", error));
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="postcontainer">
      <div className="header">
        <img
          src={post.background}
          alt="Background"
          className="background-header"
        />
        <h1 className="posttitle">{post.title}</h1>
        <img src={post.profilepic} alt="Profile" className="profile-avatar" />
      </div>
      <div className="content">
        <p>{post.description}</p>
        <p>{post.content}</p>
      </div>
      <h2>Comments</h2>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment-item">
            <strong>{comment.user}</strong> (
            {formatTimestamp(comment.timestamp)}): {comment.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newComment">Comment</label>
          <textarea
            id="newComment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default Post;
