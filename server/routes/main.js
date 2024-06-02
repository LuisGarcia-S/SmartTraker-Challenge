const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes

router.get('/index', (_, res) => {
    res.send(`Hello World!`);
});

router.post('/create_post', async(req, res) => {
    const new_post = new Post(req.body);
    try {
        const saveEntry = await new_post.save();
        res.status(200).json(saveEntry);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

router.get('/read_all', async (_, res) => {
    try {
        const data = await Post.find();
        if(data.entries.length > 0)
            res.status(200).json(data);
        else
            res.status(404).json({message:"No hay post disponibles"});
    } catch (error){
        re
        res.status(500).json({message: error.message});
    } 
});

module.exports = router;
