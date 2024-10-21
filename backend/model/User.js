// creating a user schema
// might need to expand this later on
const moongose = require('mongoose')
// TODO 13 : EXPAND THIS TO COVER MORE FIELDS
const User = new moongose.Schema({
    name:{
        type:String,
        require:true
    },
    id:{
        type:Int,
        require:true
    }
})