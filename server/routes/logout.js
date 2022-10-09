const express = require('express')
const Router= express.Router()
var cookieParser = require('cookie-parser'); 
var auth = require('./Auth')
Router.use(cookieParser())
require('dotenv').config()




Router.post('/',auth,(req,res)=>{
    if(req.authenticated){
        res.send('Some one is logged')
    }else{
        res.send('No user logged In')
    }
})


module.exports = Router
