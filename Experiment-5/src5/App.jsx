import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <div className="card">
        {isLoggedIn ? (
          <div>
            <h1>Welcome, User!</h1>
            <button className="btn logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1>Please log in.</h1>
            <button className="btn login" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
