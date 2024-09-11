const { connect_to_db } = require('../../config/conn.js');

async function retrieveAllData(targetName) {
    const { db, client } = await connect_to_db();  // destructing 
    const collection = db.collection('myCollection');
    
    try{
        // if there is no connection check if the client is connected. 

    // retrieving all data 
    // in mongoDB stored data are refered to as documents
    const document = await collection.find({name : targetName}).toArray(); 
    console.log(`Target ${targetName} is found : `, document);

    }finally{
        // closing connection
        // client is from the exported file
        await client.close();
    }
}

retrieveAllData('test-2').catch(console.error);