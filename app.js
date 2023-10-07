require('dotenv').config() // this will allow us to use the .env file variable in config file 
const cors = require('cors'); // this will allow us to use the cors

const express=require('express')
const app = express(); 

const connectToDB = require('./config/db.js'); // this will connect to the database
connectToDB();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors()); // this will allow us to use the cors

const userRoutes = require('./routes/userRoutes.js') 
app.use('/',userRoutes);



module.exports = app;