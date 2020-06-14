import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({ posts: [] });
  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.text())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <ul>
        hello!
      </ul>

    </div>
  );
}

export default App;
