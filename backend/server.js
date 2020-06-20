const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

app.use(cors());

// const baseDir = path.resolve(__dirname, '../');

// app.use(express.static(path.join(baseDir, 'frontend/build')))

var Schema = mongoose.Schema;
// const MongoClient = require('mongodb').MongoClient;

app.listen(3000, () => {
  console.log('Listening');
})

async function connect() {
  app.use(cors());
  await mongoose.connect('mongodb://localhost:27017/instagram', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const Post = mongoose.model('Post', new Schema({ content: String }));

  // const cont = new Post({content: "2"});
  // cont.save(function (err) {
  //   if (err) return handleError(err);
  // });

  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(baseDir, 'frontend', 'build', 'index.html'));
  // });


  app.get('/api/post', (req, res) => {
    Post.find({}, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result)
      }
    });
  });
}

connect();
