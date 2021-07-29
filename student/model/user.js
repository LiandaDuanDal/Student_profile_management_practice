// import mongoose package
const mongoose = require('mongoose');
// set up user schema
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    age: {
        type: Number,
        min: 10,
        max: 100
    },
    sex: {
        type: String
    },
    email: String,
    hobbies: [String],
    college: String,
    enterDate: {
        type: Date,
        default: Date.now,
    }

});

const Student = mongoose.model('Student', studentsSchema);
// for being able to be imported in other file
module.exports = Student;