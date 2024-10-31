// creating a user schema
// might need to expand this later on
const moongose = require('mongoose')

const Student = new moongose.Schema({
    first_name:{
        type:String,
        require:true
    },
    mid_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    gender:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required: true
    },
    subjects :[{
        type: String
    }],
    id:{
        type:Number,
        require:true
    }
})