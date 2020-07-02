import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/post')
      .then(response => response.json())
      .then(setData)
  }, []);

  console.log(data)
  return (
    <div className="App">
      <ul>
        {
          data.map((post,index) => {
            return (
              <li key={index}>{post.message}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
