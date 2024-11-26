const mongoose = require('mongoose');
const mongo_uri = ' mongodb+srv://johnphillipmalbasdev:JA7RY5uorElI2cYg@cluster0.9pms9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const Student = require('../../model/studentModel.js')
mongoose.connect(mongo_uri, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Cant connect to database', err))

async function saveStudent(student){
    console.log(`Student : ${student}`)
    
}


module.exports = saveStudent;