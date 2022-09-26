//This is the faster method of sending data in smaller chunks

const express = require('express');
const Test = require('./models/Test');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
mongoose.connect("mongodb://localhost:27017/test");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Data Base Connected to App JS Test !!!');
});

let counter = 0;

app.use('/data', (req, res, next) => {
    next();
})


// this route is used to fetch data. The data is broken down into chuncks of 10,000 elements. Counter is used keep track
// of chunk of data is being send
app.get('/data', async (req, res, next) => {
    const data = await Test.find().skip(counter*10000).limit(10000);
    counter++;
    res.json(data);
    next();
})


//counter is reset when this route is reached
app.get('/', (req, res, next) => {
    counter = 0;
    console.log("get route reached");
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, (req, res) => {
    console.log("Server Port 3000");
})