// creating a user schema
// might need to expand this later on
const mongoose = require('mongoose')

const student_schema = new mongoose.Schema({
    first_name:{
        type:String,
        // require:true
    },
    mid_name:{
        type:String,
        // require:true
    },
    last_name:{
        type:String,
        // require:true
    },
    email:{
        type : String
    },
    gender:{
        type: String,
        // required:true
    },
    age:{
        type: Number,
        // required: true
    },
    subjects :[{
        type: String
    }],
    id:{
        type:Number,
        // require:true
    }
});
// export this shit
module.exports = mongoose.model('Student', student_schema)