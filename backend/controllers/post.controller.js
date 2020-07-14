const express = require('express');
const cors = require('cors');
const path = require('path');
const { Router } = require('express');
const router = express.Router();

// mock data
const posts = require('../mock/post.mock.json');

const postsCopy = [...posts];

// get all posts
router.get('/', (req, res) => {
    res.status(200).send(postsCopy);
});

// get post by id
router.get('/:id', (req, res) => {
    res.status(200).send(postsCopy.find(p => p._id === req.params.id));
});

const getPostIndex = id => {
    return postsCopy.findIndex(p => p._id === id);
}

// Delete a post by id
router.delete('/:id', (req, res) => {
    const index = getPostIndex(req.params.id);
    if (index > -1) {
        postsCopy.splice(index, 1);
    }
    res.status(204).send('deleted');
});

// Update a post
router.put('/:id', (req, res) => {
    const index = getPostIndex(req.params.id);
    if (index > -1) {
        postsCopy[index] = req.body;
    }
    res.status(204).send('updated');
});

// create a new post
router.post('/', (req, res) => {
   postsCopy.push(req.body);
   res.status(201).send();
});

module.exports = router;
