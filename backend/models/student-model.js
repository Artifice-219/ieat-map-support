const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const user_schema =  new Schema({

    name : String,
    section : String,
    year : String,
    stud_num : String,
    email : String,
    password : String,
    type : String

});

const Person = mongoose.model('User', user_schema);