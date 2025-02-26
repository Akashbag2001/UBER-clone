const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors')
const connectToDb = require('./db/db.js')
const express = require('express');
const app = express();

app.use(cors());
connectToDb()
app.get('/',(req,res)=>{
    res.send("Hello World!");
})


module.exports = app;