const express = require('express')
const Router= express.Router()
var cookieParser = require('cookie-parser'); 
var auth = require('./Auth')
Router.use(cookieParser())
require('dotenv').config()




Router.post('/',auth,(req,res)=>{
    if(req.authenticated){
        var auth_token =  req.cookies['auth-token']
        res.cookie("auth-token",`${auth_token}`,{sameSite:'strict',path:'/',expires:new Date(new Date().getTime()+0*1000),httpOnly:true})
        res.send({message:'LOGGED OUT',status:200})
    }else{
        res.send('No user logged In')
    }
})


module.exports = Router
