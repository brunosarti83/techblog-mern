const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModels');

//get all blogs
router.get('/', (_, res) => {
    res.send({message: 'get all blogs'})
})

//get one blog by id
router.get('/:id', (req, res) => {
    res.send({message: 'get one blog by id', blogId: req.params.id})
})

//add a blog entry
router.post('/', async (req, res) => {
    try {
        const blog = new Blog(req.body)
        await blog.save()
        res.status(201).json({message: 'Blog added succesfully'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//edit one blog by id
router.put('/:id', (req, res) => {
    res.send({message: 'edit one blog by id', blogId: req.params.id})
})

module.exports = router;