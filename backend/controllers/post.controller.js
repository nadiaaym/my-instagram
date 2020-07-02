const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const { Router } = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

var Schema = mongoose.Schema;

const Post = mongoose.model('Post', new Schema({
    content: String,
    message: String,
    date: Date,
}));

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/instagram', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
connect();

router.get('/', (req, res) => {
    Post.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result)
        }
    });
});

router.post('/', (req, res) => {
    Post.collection.insert(req.body)
    console.log('inserted new document')
});

router.put('/:id', (req, res) => {
    Post.collection.replaceOne({"_id" : req.params}, {"_id": res.params})
});

function testPost() {
    const cont = new Post({
        message: "8",
        date: new Date()
    });

    cont.save(function (err) {
        if (err) return handleError(err);
    });
}

// testPost();



module.exports = router;