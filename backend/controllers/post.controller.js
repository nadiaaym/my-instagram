const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const { Router } = require('express');
const router = express.Router();

var Schema = mongoose.Schema;

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/instagram', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const Post = mongoose.model('Post', new Schema({ content: String }));

    router.get('/', (req, res) => {
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


// const cont = new Post({content: "2"});
// cont.save(function (err) {
//   if (err) return handleError(err);
// });

module.exports = router;



