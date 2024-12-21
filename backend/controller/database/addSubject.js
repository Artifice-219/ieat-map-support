const mongoose = require("mongoose");
const Student = require("../../model/studentModel");


// will use the mongo generated id to query the database
async function addSubject(targetId, newSubject) {
    console.log(`targetID ${targetId}`)
    const student = await Student.findById(targetId);

    console.log("Student found:", student); 
    if (!student) {
        throw new Error('Student not found');
    }

   // Initialize schedule if it doesn't exist
    if (!student.schedule) {
        console.log("Schedule is undefined. Initializing...");
        student.schedule = new Map();
    }

    console.log("Schedule before adding:", student.schedule);

    student.schedule.set(newSubject.name, {
        instructor: newSubject.instructor,
        days: newSubject.days,
        startTime: newSubject.startTime,
        endTime: newSubject.endTime
    });

    console.log("Schedule after adding:", student.schedule); 

    await student.save();

    console.log(student.schedule)
}


module.exports = addSubject; 