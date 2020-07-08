import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './features/components/form.component';
import Button from './features/components/button.component';

function App() {
  const [data, setData] = useState([]);

  const callServer = (url, options) => {
    return fetch(url, options)
      .then(response => response.json())
      .then(setData)
  }
  // useEffect(() => {
    const fetchPost = () =>
      callServer('http://localhost:3000/api/post', { method: 'GET' })
        .then(newData => { })
  // };, []);

  const creatPost = (body) => {
    callServer('http://localhost:3000/api/post', { method: 'POST', body })
      .then(newData => { })
  };

  console.log(data)
  return (
    <div className="App">
      <Form onChange={(e) => console.log(e.target.value)}/>
      <Button x={() => creatPost(setData)} text='create post' />
      <Button x={() => fetchPost()} text='get posts' />
      <Button x={() => console.log("home clicked")} text='home' />
      <ul>
        {
          data.map((post, index) => {
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
