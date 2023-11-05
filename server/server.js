const express = require("express");
const router = require("./routes/blogRoutes");
const app = express()
// bring vars from .env
require('dotenv').config()
const PORT = process.env.PORT || 5000;
// on this import dbConnect gets excecuted
const dbconnect = require('./config/dbConnect')

app.get('/ping', (_, res)=> {
    res.json({message: 'MERN says pong'})
})

app.use('/api/blogs', router)

app.listen(PORT, () => {
    console.log(`MERN Server Running on Port ${PORT}`)
})