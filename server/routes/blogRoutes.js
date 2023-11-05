const express = require('express');
const router = express.Router();

//get all blogs
router.get('/', (_, res) => {
    res.send({message: 'get all blogs'})
})

//get one blog by id
router.get('/:id', (req, res) => {
    res.send({message: 'get one blog by id', blogId: req.params.id})
})

//add a blog entry
router.post('/', (req, res) => {
    res.send({message: 'add blog entry'})
})

//edit one blog by id
router.put('/:id', (req, res) => {
    res.send({message: 'edit one blog by id', blogId: req.params.id})
})

module.exports = router;