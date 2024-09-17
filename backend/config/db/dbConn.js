async function main(){

    const { MongoClient } = require('mongodb');

    const uri = 'mongodb+srv://jpmalbas4:Y6p3D3EqeGFPczdI@cluster0.7nsvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(uri);


    try{
        
    await client.connect();
    console.log("Succesfully connected to the database");

    }catch(e){
        console.error(e);
        console.log('Cant connect to the database' , e)

    }
    finally{
        client.close();
    }

}
main().catch(console.error);