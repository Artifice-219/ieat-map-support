const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function connect_to_db(){
    try{
        // connecting to server
        await client.connect();
        console.log('Successfully connected to MongoDb');
        const db = client.db('myLocalDB');

        // this file will be exported
        // returning the db and the client
        return { db, client };

    }catch( error ){

        console.error('Failed connection to mongoDB', error)
        throw error;

    }
}

// exporting this file
module.exports = { connect_to_db };
 