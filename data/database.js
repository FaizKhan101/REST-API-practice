const mongodb = require("mongodb")

const MongoDbClient = mongodb.MongoClient

let _db;

async function initDb() {
    const client = await MongoDbClient.connect("mongodb://localhost:27017")
    _db = client.db("rest-practice")
}

function getDb() {
    if (!_db) {
        throw new Error("Connection to the database failed!")
    }
    return _db
}

module.exports = {
    initDb: initDb,
    getDb: getDb
}