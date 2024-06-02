const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes

router.get('/index', (req, res) => {
    res.send(`Hello World at port: ${PORT}`);
});

module.exports = router;
