import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Welcome to the Blog</h1>
      </header>
      <main>
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>&copy; 2023 Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
