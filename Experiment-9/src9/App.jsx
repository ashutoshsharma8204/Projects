import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [filter, setFilter] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <header className="header">
        <h1>Item List</h1>
      </header>
      <main className="main-content">
        <div className="container">
          <input
            type="text"
            placeholder="Filter items"
            value={filter}
            onChange={handleFilterChange}
          />
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2025 My Application</p>
      </footer>
    </div>
  );
};

export default App;
