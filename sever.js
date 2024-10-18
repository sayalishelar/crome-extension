const express = require("expree");
const { MongoClient} = require("mongodb"); 
const dotenv = require("dotenv"); 
dotenv.config()
const app = express();

const uri = process.cnv.ATLAS_URI || ""

const client = new MongoClient(uri);

let connectedClient, db;

async function connectToMDB() {
    try{
        connectedClient = await client.connect();
        console.log("Connected to MongoDB");

    }catch(c) {

        console.log(e);
    }finally{
        db = connectedClient.db("myDatabase");
    }
}

app.listeners(3000, () => {
    console.log("app is listening on port 3000")
})

connectToMDB();
