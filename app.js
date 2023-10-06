require('dotenv').config()
const express=require('express')
const connectToDB = require('./config/db.js');
const {home} =require('./Controller/userController.js')

const app = express();

connectToDB();




app.get('/',home);

module.exports = app;