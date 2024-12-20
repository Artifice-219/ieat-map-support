const { default: mongoose } = require("mongoose");
const Student = require("../../model/studentModel");

// use the mongo generated id field to query the database :
function updateStudent_Subject(target_id, subject_name, updated_data){
    target_id = new mongoose.Types.ObjectId(target_id)

    Student.findByIdAndUpdate(
        target_id, 
        {[`schedule.${subject_name}`] : updated_data},
        {new : true}
    )
    .then(updateStudent => console.log(updateStudent))
    .catch(error => console.log(error))
}


module.exports =  updateStudent_Subject;