import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({posts: []});

  return (
    <div className="App">
      <ul>
        {data.posts.map()}
      </ul>
      
    </div>
  );
}

export default App;
