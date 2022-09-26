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

// this route is used to fetch data from the data base all at once.
app.get('/data', async (req, res, next) => {
    const data = await Test.find();
    res.json(data);
    next();
})

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/another_index.html'));
});

app.listen(8000, (req, res) => {
    console.log("Server Port 8000");
})