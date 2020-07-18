const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const postController = require('./controllers/post.controller.js');
const imageController = require('./controllers/image.controller.js');

const PORT = 3000;

app.use(cors());

const baseDir = path.resolve(__dirname, '../');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(baseDir, 'frontend/build')))

app.use('/api/post', postController);
app.use('/api/image', imageController);

app.get('/', (req, res) => {
  res.sendFile(path.join(baseDir, 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Listening');
})

