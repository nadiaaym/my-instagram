import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePostForm from './features/components/form.component';
import Button from './features/components/button.component';
import RenderPostList from './features/components/post.list.component';
import Images from './features/components/image.list.component';


function App() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  const callServer = (url, options) => {
    return fetch(url, options)
      .then(response => response.json());
  }

  useEffect(() => {
    fetchImage()
      .then(fetchPost)
  }, []);

  const fetchImage = () =>
    callServer('http://localhost:3000/api/image', { method: 'GET' })
      .then(setImages)

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
      {/* <Images imageList={images}></Images> */}
      <Images imageList={images} />
      <CreatePostForm onCreatePost={onCreatePost} />
      <Button x={() => console.log("home clicked")} text='home' />
      <RenderPostList posts={posts} />
    </div>
  );
}

export default App;