// models/Student.js

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    mobilenumber: String,
    emailid: String
});

module.exports = mongoose.model('Student', StudentSchema);
