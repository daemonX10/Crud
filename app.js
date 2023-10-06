require('dotenv').config()
const express=require('express')
const connectToDB = require('./config/db.js');

const app = express();

connectToDB();

const homeresponse=(req,res)=>{
    res.send("hello world");
}


app.get('/',homeresponse);

module.exports = app;