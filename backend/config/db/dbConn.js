async function main(){

    const { MongoClient } = require('mongodb');

    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);


    try{
        
    await client.connect();
    console.log("Succesfully connected to the database");
    // for exportation
    return client;

    }catch(e){
        console.error(e);
        console.log('Cant connect to the database' , e)

    }

}
// main and ene export hindi ang client kasi if you export the client 
// by its asynchronouse nature you will be most likely exporting an empty client

module.exports = main;