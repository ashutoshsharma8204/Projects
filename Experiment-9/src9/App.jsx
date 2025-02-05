import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
