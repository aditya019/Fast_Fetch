const mongoose = require('mongoose');

const {Schema} = mongoose;

const testSchema = new Schema({
    name: String,
    company: String
});

module.exports = mongoose.model('Test', testSchema);