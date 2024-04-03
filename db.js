// import mongoose
const mongoose = require("mongoose");
require('dotenv').config();

//define the mongodb url
// const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.DB_URL;
//replace the / with you database name

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connection 
//mongoose maintains a default connection object representing a MongoDB connection
const db = mongoose.connection; //this is used to build a bridge between server and database

//define event listener
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});
db.on('error',(err)=>{
    console.log('MongoDB connection error');
});
db.on('disconnected',()=>{
    console.log('MongoDB disconnected ');
});

//start listening to events 
module.exports = db;