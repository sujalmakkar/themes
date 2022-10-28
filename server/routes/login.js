const express = require('express')
const Router= express.Router()
const mongoClient = require('mongodb').MongoClient;
const cookieParser = require('cookie-parser'); 
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

const cors = require('cors');
Router.use(cors())

// CONNECT TO DATABASE
var DB;
mongoClient.connect(url=process.env.DB).then(client=>{
    DB = client.db('new')
}).catch(err=>console.log(err))
// CONNECT TO DATABASE

Router.use(bodyParser.json())
Router.use(cookieParser())

Router.post('/',async (req,res)=>{
    var credentials = req.body
    validate(credentials)
    async function validate(credentials){
        var exists = await DB.collection('productivity').findOne({email:credentials.email})
        console.log(exists)
        if(exists == '' || !exists) {
             res.json({message:'User does not exists'})
        }
        else if(exists.emailValidated){
            await bcrypt.compare(credentials.password, exists.password,function(err,valid){
                if(valid){
                    const token = jwt.sign({uid:exists.uid,username:exists.email},process.env.SECRETJWT)
                    res.cookie("auth-token",`${token}`,{sameSite:'strict',path:'/',expires:new Date(new Date().getTime()+3608980*1000),httpOnly:true})
                    res.json({message:"User Exists",status:200})
                }else{
                    res.json({message:'INCORRECT PASSWORD',status:406})
                }
            });
        }
        else{
            res.status(301).json({message:'Your email is not validated, Validate it first'})
        }
    }
})


module.exports = Router