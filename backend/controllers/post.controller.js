const express = require('express');
const cors = require('cors');
const path = require('path');
const { Router } = require('express');
const router = express.Router();

router.post('/', (req, res) => {

})

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {
    Post.collection.insert(req.body)
    console.log('inserted new document')
});

router.put('/:id', async (req, res) => {
    const doc = await Post.replaceOne({ "_id": req.params.id }, req.body)
    res.status(201).send(doc)
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