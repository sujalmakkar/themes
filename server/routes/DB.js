const mongoClient = require('mongodb').MongoClient;
const USER = require('../modal/schema')

var DB;

mongoClient.connect(url='mongodb://localhost:27017').then(client=>{
    DB = client.db('new')
}).then(()=>{
    console.log('connected to database')
    module.exports = DB;
}).catch(err=>console.log(err))
