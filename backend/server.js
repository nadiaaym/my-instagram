const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const postController = require('./controllers/post.controller.js') 

app.use(cors());
app.use('/api/post', postController);

const baseDir = path.resolve(__dirname, '../');

app.use(express.static(path.join(baseDir, 'frontend/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(baseDir, 'frontend', 'build', 'index.html'));
});


// const MongoClient = require('mongodb').MongoClient;

app.listen(3000, () => {
  console.log('Listening');
})

