require('dotenv').config()
const express=require('express')
const connectToDB = require('./config/db.js');

const app = express();

connectToDB();

module.exports = app;