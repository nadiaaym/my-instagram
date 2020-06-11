const express = require('express');

const app = express();
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
// const MongoClient = require('mongodb').MongoClient;

app.get('/', (req, res) => {
  res.send('Hi!');
});

app.listen(3000, () => {
  console.log('Listening');

})


async function connect() {
  await mongoose.connect('mongodb://localhost:27017/instagram', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const Post = mongoose.model('Post', new Schema({ content: String }));

  const cont = new Post({content: "2"});
  cont.save(function (err) {
    if (err) return handleError(err);
  });

  console.log(await Post.find({}).lean());
}

connect();



//   const db = MongoClient.connect('mongodb://localhost:27017/instagram');
//   db.collection("posts").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });


//   , function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("instagram");
//     dbo.collection("posts").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });