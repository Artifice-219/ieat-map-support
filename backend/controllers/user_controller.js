//  exporting database connection
const { connect_to_db } = require('../config/conn');


async function add_user(student_num, pass) {

    const db = await connect_to_db();
    const collection = db.collection('myCollection');
    
    // inserting data to database
    const insertion_result = await collection.insertOne({
        name : 'test-2',
        stud_num : student_num,
        password : pass,
        value : 100
    });

    console.log('Succesfully added to database', insertion_result);
    
}

add_user().catch(console.error);