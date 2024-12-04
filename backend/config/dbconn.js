const mongoose = require("mongoose");
const mongo_uri ="mongodb+srv://johnphillipmalbasdev:JA7RY5uorElI2cYg@cluster0.9pms9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function conn(){

    try{

       await  mongoose.connect(mongo_uri, {useNewUrlParser : true, useUnifiedTopology : true});
       console.log('From dbconn : Successfully connected to database')
    }
    catch(e){
        console.error(`'Stupid programmer ' ${e}`)
    }
    
}

module.exports =  conn;








// const mongoose = require('mongoose');
// const mongo_uri = ' mongodb+srv://johnphillipmalbasdev:JA7RY5uorElI2cYg@cluster0.9pms9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// mongoose.connect(mongo_uri, {useNewUrlParser : true, useUnifiedTopology : true});