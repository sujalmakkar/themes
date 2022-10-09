const express = require('express')
const Router= express.Router()
var cookieParser = require('cookie-parser'); 
require('dotenv').config()
const mongoClient = require('mongodb').MongoClient;
Router.use(cookieParser())

// CONNECT TO DATABASE
var DB;
mongoClient.connect(url=process.env.DB).then(client=>{
    DB = client.db('new')
}).catch(err=>console.log(err))
// CONNECT TO DATABASE


Router.post('/',async (req,res)=>{
    var token =  req.cookies['auth-token']

    if(token == '' || token == "null" || token == null){
        res.json({message:'Login First'})
    }else{
        var verified = jwt.verify(token,process.env.SECRETJWT)
        var info = verified.uid
        var deleted = await DB.collection('productivity').deleteOne({uid:info})
        console.log(deleted)
        res.json({message:'deleted!'})
    }
})


module.exports = Router
