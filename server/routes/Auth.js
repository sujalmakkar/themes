const express = require('express')
const Router= express.Router()
var cookieParser = require('cookie-parser'); 
require('dotenv').config()
Router.use(cookieParser())
const mongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken')


// CONNECT TO DATABASE
var DB;
mongoClient.connect(url=process.env.DB).then(client=>{
    DB = client.db('new')
}).catch(err=>console.log(err))
// CONNECT TO DATABASE

var secret = process.env.SECRETJWT

async function auth(req, res, next) {
    var token =  req.cookies['auth-token']
    console.log(token,'token')
    if(token == '' || token == "null" || token == null){
        req.authenticated = false
        console.log('middleware does n exists')
        next()
    }else{
        console.log(secret)
        var verified = jwt.verify(token,secret)
        var info = verified.uid
        var exists =  await DB.collection('productivity').findOne({uid:info})
        if(exists!=null){
            req.authenticated = true
            req.uid = exists.uid
            next()
        }else{
            req.authenticated = false
            next()
        }
    }
}

module.exports = auth