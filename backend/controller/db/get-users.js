// getting the connection
const conn = require('../../config/db/dbConn.js');

async function get_user(){
    // getting the client returned by the connection
    const client = await conn();

    try {
        // defining the database
        const database = client.db('myLocalDB')
        const collection = database.collection('myCollection')

        // querying for all users in the specified collection
        const users = collection.find({});
        // users is is cursor obj in mongoDb cant log directyl
        // remember await is an asynchronous operation, operation is paused until await is finished
        while(await users.hasNext()){ //check if there are more document in cursor obj
            const data = await users.next(); // fetches the "next" document and assing it to the data varianble
            console.log(data);
        }
        
    } catch (error) {
        console.log('An error occured :', error)
        
    }
    finally{
        // closing the client connection
        if(client){
            client.close()
            console.log('Client connection to db is closed')
        }
    }
}

// always remember to call a function   HAHAHAHAHAHHAHAH
get_user();