const express = require('express')
const Router= express.Router()
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const auth = require('./Auth')


// CONNECT TO DATABASE
var DB;
mongoClient.connect(url=process.env.DB).then(client=>{
    DB = client.db('new')
}).catch(err=>console.log(err))
// CONNECT TO DATABASE


Router.use(bodyParser.json())


Router.get('/deadline',auth,async(req,res)=>{
    if(req.authenticated){
        var inserted = await DB.collection('productivity').findOne({uid:req.uid},{projection:{alldeadlines:1,_id:0}})
        console.log(inserted)
        if(inserted!=null){
            res.json(inserted)
        }
    }else{
        res.json({message:'no user logged In'})
    }
})

Router.get('/todos',auth,async(req,res)=>{
    if(req.authenticated){
        var inserted = await DB.collection('productivity').findOne({uid:req.uid},{projection:{alltodos:1,_id:0}})
        console.log(inserted)
        if(inserted!=null){
            res.json(inserted)
        }
    }else{
        res.json({message:'no user logged In',status:301})
    }
})

Router.get('/dob',auth,async(req,res)=>{
    if(req.authenticated){
        var inserted = await DB.collection('productivity').findOne({uid:req.uid},{projection:{dob:1,_id:0}})
        console.log(inserted)
        if(inserted!=null){
            res.json(inserted)
        }else{
            res.json()
        }
    }else{
        res.json({message:'no user logged In'})
    }
})

Router.get('/notes',auth,async(req,res)=>{
    if(req.authenticated){
        var inserted = await DB.collection('productivity').findOne({uid:req.uid},{projection:{allnotes:1,_id:0}})
        if(inserted!=null){
            res.json(inserted.allnotes)
        }else{
            res.json()
        }
    }else{
        res.json({message:'no user logged In'})
    }
})

Router.get('/note/:id',auth,async(req,res)=>{
    var id = req.params.id
    if(req.authenticated){
        var inserted = await DB.collection('productivity').findOne({uid:req.uid},{projection:{allnotes:1,_id:0}})
        console.log(inserted)
        var note = inserted.allnotes.filter(a=>a.id==id)
        if(note!=null){
            res.json(note)
        }else{
            res.json()
        }
    }else{
        res.json({message:'no user logged In'})
    }
})



Router.get('/goals',auth,async(req,res)=>{
    if(req.authenticated){
        var inserted = await DB.collection('productivity').findOne({uid:req.uid},{projection:{allgoals:1,_id:0}})
        if(inserted!=null){
            res.json(inserted)
        }
    }else{
        res.json({message:'no user logged In',status:301})
    }
})

Router.get('/letters',auth,async(req,res)=>{
    if(req.authenticated){
        var inserted = await DB.collection('productivity').findOne({uid:req.uid},{projection:{allletters:1,_id:0}})
        var duedates = []
        inserted.allletters.map(e=>duedates.push(e.date))
        var data = {
            number:duedates.length,
            duedates:duedates
        }
        if(inserted!=null){
            res.json(data)
        }
    }else{
        res.json({message:'no user logged In',status:301})
    }
})


module.exports = Router