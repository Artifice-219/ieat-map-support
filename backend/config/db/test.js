const conn = require('./dbConn');

async function main(){

    const client = await conn();

    const database = client.db('myLocalDB');
    const student_collection = database.collection('student_collection');
    const instructor_collection = database.collection('instructor_collection')
    const room_collection = database.collection('room_collection')

    try{
        const  student_insertionResult = await student_collection.insertMany([
            {
                "name": "Alice Green",
                "student_id": "STU20001",
                "schedule": {
                    "Monday": [
                        {
                            "subject": "Data Structures",
                            "time": "9:00 AM-10:30 AM",
                            "room": "Room 201"
                        },
                        {
                            "subject": "Algorithms",
                            "time": "11:00 AM-12:30 PM",
                            "room": "Room 202"
                        }
                    ],
                    "Tuesday": [
                        {
                            "subject": "Database Systems",
                            "time": "8:00 AM-10:00 AM",
                            "room": "Room 203"
                        },
                        {
                            "subject": "Vacant",
                            "time": "10:00 AM-12:00 PM",
                            "room": "Room 202"
                        }
                    ],
                    "Wednesday": [
                        {
                            "subject": "Operating Systems",
                            "time": "1:00 PM-3:00 PM",
                            "room": "Room 201"
                        }
                    ]
                },
            },
            {
                // add another item after this line here
                "name": "Bob Carter",
                "student_id": "STU20002",
                "schedule": {
                    "Monday": [
                        {
                            "subject": "Data Structures",
                            "time": "9:00 AM-10:30 AM",
                            "room": "Room 201"
                        },
                        {
                            "subject": "Vacant",
                            "time": "10:30 AM-12:00 PM",
                            "room": "Room 202"
                        }
                    ],
                    "Tuesday": [
                        {
                            "subject": "Database Systems",
                            "time": "8:00 AM-10:00 AM",
                            "room": "Room 203"
                        },
                        {
                            "subject": "Algorithms",
                            "time": "2:00 PM-3:30 PM",
                            "room": "Room 202"
                        }
                    ],
                    "Thursday": [
                        {
                            "subject": "Operating Systems",
                            "time": "10:00 AM-12:00 PM",
                            "room": "Room 201"
                        }
                    ]
                },
            },
            {
                "name": "Chloe Adams",
                "student_id": "STU20003",
                "schedule": {
                    "Monday": [
                        {
                            "subject": "Data Structures",
                            "time": "9:00 AM-10:30 AM",
                            "room": "Room 201"
                        },
                        {
                            "subject": "Algorithms",
                            "time": "11:00 AM-12:30 PM",
                            "room": "Room 202"
                        }
                    ],
                    "Wednesday": [
                        {
                            "subject": "Database Systems",
                            "time": "2:00 PM-4:00 PM",
                            "room": "Room 203"
                        }
                    ],
                    "Friday": [
                        {
                            "subject": "Operating Systems",
                            "time": "8:00 AM-10:00 AM",
                            "room": "Room 201"
                        }
                    ]
                },
            } 
        ])
        console.log(`'Student insertion successfull' ${student_insertionResult.insertedIds}`)

        const instructor_insertionResult = await instructor_collection.insertMany([
            {
                "name": "Mr. Arjay Marucot",
                "employee_id": "EMP30001",
                "subjects": [
                    "Data Structures",
                    "Operating Systems"
                ],
                "schedule": {
                    "Monday": [
                        {
                            "subject": "Data Structures",
                            "time": "9:00 AM-10:30 AM",
                            "room": "Room 201"
                        }
                    ],
                    "Wednesday": [
                        {
                            "subject": "Operating Systems",
                            "time": "1:00 PM-3:00 PM",
                            "room": "Room 201"
                        }
                    ],
                    "Friday": [
                        {
                            "subject": "Operating Systems",
                            "time": "8:00 AM-10:00 AM",
                            "room": "Room 201"
                        }
                    ]
                }  
            },
            {
                "name": "Ms. Russel Amira Balacania",
                "employee_id": "EMP30002",
                "subjects": [
                    "Algorithms",
                    "Database Systems"
                ],
                "schedule": {
                    "Monday": [
                        {
                            "subject": "Algorithms",
                            "time": "11:00 AM-12:30 PM",
                            "room": "Room 202"
                        }
                    ],
                    "Tuesday": [
                        {
                            "subject": "Database Systems",
                            "time": "8:00 AM-10:00 AM",
                            "room": "Room 203"
                        }
                    ],
                    "Wednesday": [
                        {
                            "subject": "Database Systems",
                            "time": "2:00 PM-4:00 PM",
                            "room": "Room 203"
                        }
                    ]
                }
            },
            {
                "name": "Mr. Jerome Dimafelix",
                "employee_id": "EMP30003",
                "subjects": [
                    "Operating Systems",
                    "Database Systems"
                ],
                "schedule": {
                    "Tuesday": [
                        {
                            "subject": "Database Systems",
                            "time": "8:00 AM-10:00 AM",
                            "room": "Room 203"
                        }
                    ],
                    "Thursday": [
                        {
                            "subject": "Operating Systems",
                            "time": "10:00 AM-12:00 PM",
                            "room": "Room 201"
                        }
                    ]
                }
            }
        ])
        console.log(`Instructor insertion successfull ${instructor_insertionResult.insertedIds}`)

        const room_insertionResult = await room_collection.insertMany([
            {
                "room_id": "Room 201",
                "capacity": 30,
                "features": [
                    "Projector",
                    "Whiteboard",
                    "Air-conditioned"
                ]
            },
            {
                "room_id": "Room 202",
                "capacity": 25,
                "features": [
                    "Whiteboard",
                    "AC"
                ]
            },
            {
                "room_id": "Room 203",
                "capacity": 40,
                "features": [
                    "Projector",
                    "Whiteboard",
                    "AC",
                    "Sound System"
                ]
            }
        ])
        console.log(`Room insertion succesfull ${room_insertionResult.insertedIds}`)

        console.log('All insertion success')
    }
    catch(e){

        if(e instanceof  TypeError){
            console.log(`'A TypeErro occured ${e}`)
            alert(`An error ${e} has occured in the backend in test.js ??? `)
        }
        else{
            console.log(`An error occured ${e}`)
        }
    }
}

main();