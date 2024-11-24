const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName :{
        type : String,
        required : true
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        require : true
    },
    age : {
        type : Number
    },
    gender : {
        type : String
    },
    studentNumber : {
      type : Number,
      required : true  
    },
    password : {
        type : Number,
        require : true
    }
})


// creating a model from that schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;