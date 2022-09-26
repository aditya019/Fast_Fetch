// filling the database with data. 

const mongoose = require('mongoose');
const Test = require('./models/Test');
const faker = require("@faker-js/faker");

mongoose.connect("mongodb://localhost:27017/test");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Data Base Connected to App JS Test !!!');
});

const func = async () => {
    let name = faker.faker.name.firstName();
    let company = faker.faker.company.name();
    let newTest = {name, company};
    const test = new Test(newTest);
    await test.save();
} 

const fun2 =  async () => {
    for(let i = 0; i < 30001; i++) {
        await func();
    }
} 

fun2().then(() => console.log("DB filled"));