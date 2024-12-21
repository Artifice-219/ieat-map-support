const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    studentNumber: {
      type: Number,
      required: true  
    },
    password: {
        type: String,
        required: true
    },
    schedule: {
        type: Map,
        of: new mongoose.Schema({
            days: String,
            startTime: String,
            endTime: String
        }, { _id: false })
    }
});

// creating a model from that schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;