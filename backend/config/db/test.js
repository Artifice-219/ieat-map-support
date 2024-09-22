const conn = require('./dbConn');

async function main(){

    const client = await conn();

    try{

        if(client){
            //  defining the database
            const database = client.db('myLocalDB');
            const collection = database.collection('myCollection');

            // inserting some data to the database
            const new_user = {
                name : "Ellis Nicholas Capongga Paguio",
                age : 1,
                email : "test@gmail.com",
            }

            const result = await collection.insertOne(new_user);
            // id is automatically generated in mongoDB
            console.log(`New user added id number : ${result.insertedId}`);
        }

    }catch(e){
        // catching some errors in the try block
        console.log(`'An error occured while attempting to insert ' ${e}`);

    }
    finally{
        // closing the connection ano man ang mangyari
        client.close()
    }
}

main();