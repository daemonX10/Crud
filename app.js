require('dotenv').config() // this will allow us to use the .env file variable in config file 
const express=require('express')
const app = express(); 

const connectToDB = require('./config/db.js'); // this will connect to the database
const cors = require('cors'); // this will allow us to use the cors
connectToDB();


const userRoutes = require('./routes/userRoutes.js') 
app.use('/',userRoutes);
app.use(cors()); // this will allow us to use the cors



module.exports = app;