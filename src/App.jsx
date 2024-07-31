import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import HomePage from "./components/HomePage";
import Post from "./components/Post";
import NewPostForm from "./components/NewPostForm";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/blogs" element={<HomePage />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/new-post" element={<NewPostForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
