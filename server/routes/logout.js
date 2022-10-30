const express = require('express')
const Router= express.Router()
var cookieParser = require('cookie-parser'); 
var auth = require('./Auth')
Router.use(cookieParser())
require('dotenv').config()




Router.post('/',auth,(req,res)=>{
    if(req.authenticated){
        res.clearCookie('auth-token');
        res.send({message:'LOGGED OUT',status:200})
    }else{
        res.send('No user logged In')
    }
})


module.exports = Router
