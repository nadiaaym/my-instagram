import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePostForm from './features/components/form.component';
import Button from './features/components/button.component';
<<<<<<< HEAD
=======
import RenderPostList from './features/components/post.list.component';
>>>>>>> post list seperated

function App() {
  const [posts, setPosts] = useState([]);

  const callServer = (url, options) => {
    return fetch(url, options)
      .then(response => response.json());
  }

  const fetchPost = () =>
    callServer('http://localhost:3000/api/post', { method: 'GET' })
      .then(setPosts)

  const createPost = (body) => {
    const headers = new Headers()
    headers.set('Content-Type', 'application/json') 
    callServer('http://localhost:3000/api/post', { method: 'POST', body: JSON.stringify(body), headers })
      .then(fetchPost)
  };

  const onCreatePost = (e) => {
    createPost({ message: e })
  }

  return (
    <div className="App">
      <CreatePostForm onCreatePost={onCreatePost} />
      <Button x={fetchPost} text='get posts' />
      <Button x={() => console.log("home clicked")} text='home' />
      <RenderPostList posts={posts} />
    </div>
  );
}

export default App;