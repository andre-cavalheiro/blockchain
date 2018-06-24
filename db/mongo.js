const MongoClient = require('mongodb').MongoClient;

// Database configuration parameters
const {url, dbName, collection} = require('../config/db')

const insertInDB = function (payload) {
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
        if(!err){
            console.log("Connected successfully to server");
        }

        const db = client.db(dbName);
        db.collection(collection).insert({...payload})
    });
    return true
}

const getLastElement = async function (db) {
    const numElements = await db.collection(collection).count()
    const results = db.collection(collection)
    console.log(results)
    return results
}

module.exports = {
    insertInDB,
    getLastElement
}
