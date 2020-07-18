const express = require('express');
const cors = require('cors');
const path = require('path');
const { Router } = require('express');
const { v1: uuid } = require('uuid');

const router = Router();

// mock data
const images = require('../mock/images.mock.json');

// get all images
router.get('/', (req, res) => {
    res.status(200).send(images);
    console.log(images)
});

module.exports = router;
