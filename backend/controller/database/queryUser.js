const email = 'kamote@gmail.com'
Student = require('../../model/studentModel.js')

const mongoose = require("mongoose");
const mongo_uri ="mongodb+srv://johnphillipmalbasdev:JA7RY5uorElI2cYg@cluster0.9pms9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function findUser(target_email){
    try{
        const studentFound = await Student.find({email : target_email});
        studentJson = JSON.stringify(studentFound)
        // save this shit to the database
        localStorage.setItem('currentStudent',studentJson)
        // try to retrived that fucker
        const retrivedFuck = localStorage.getItem('currentStudent');
        
        console.log(JSON.parse(retrivedFuck));

    }catch(error){
        console.error(`'Cant find target or you sucks as a programmer : ' ${error}`)
    }
}


findUser(email)