const express = require('express')
const Router= express.Router()
const mongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken')

// CONNECT TO DATABASE
var DB;
mongoClient.connect(url=process.env.DB).then(client=>{
    DB = client.db('new')
}).catch(err=>console.log(err))
// CONNECT TO DATABASE


Router.get('/:id',async (req,res)=>{
    var id = parseInt(req.params.id)
    var emailVerified =  await DB.collection('productivity').updateOne({uid:id},{$set :{emailValidated:true}})
    if(emailVerified){
        res.redirect('Validated')
    }
})

module.exports = Router