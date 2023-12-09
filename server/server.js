const express = require("express");
const router = require("./routes/blogRoutes");
const app = express()
// morgan for development messages on server
const morgan = require("morgan");
// bring vars from .env
require('dotenv').config()
const PORT = process.env.PORT || 5000;
// on this import dbConnect gets excecuted
const dbconnect = require('./config/dbConnect')

app.get('/ping', (_, res)=> {
    res.json({message: 'MERN says pong'})
})

app.use(morgan("dev"));
app.use(express.json())

app.use((req, res, next) => {
    //res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/api/blogs', router)

app.listen(PORT, () => {
    console.log(`MERN Server Running on Port ${PORT}`)
})