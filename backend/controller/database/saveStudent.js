const conn = require('./../../config/dbconn')
const Student = require('./../../model/studentModel')

async function saveStudent(username, email, age, gender , studentNumber, password){

    conn()

    try{
        const newStudent = new Student({
            firstName: username,
            lastName: "you have no last name param",
            email : email,
            age: age,
            gender: gender,
            studentNumber: studentNumber,
            password : password
          });
          
          const savedStudent = await newStudent.save();
          console.log(`'New record saved : ' ${savedStudent}`)
    }
    catch(err){
        console.error(`Cannot save student :  ${err}`);
    }
}


module.exports = saveStudent;