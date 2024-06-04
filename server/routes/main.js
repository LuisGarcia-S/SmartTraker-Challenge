const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const bodyParser = require('body-parser');

//Routes

router.get('/index', (_, res) => {
    res.send(`Hello World!`);
});

router.post('/create_post', bodyParser.json(), async(req, res) => {
    console.log(req.body);
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
        if(data.length > 0)
            res.status(200).json(data);
        else
            res.status(404).json({message:"No hay post disponibles"});
    } catch (error){
        re
        res.status(500).json({message: error.message});
    } 
});

router.get('/read/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const data = await Post.findById(postId);
        if(data)
            res.status(200).json(data);
        else
            res.status(404).json({message:"No hay post disponibles"});
    } catch (error){
        re
        res.status(500).json({message: error.message});
    } 
});

module.exports = router;
