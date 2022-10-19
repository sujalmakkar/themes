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


// ADDING A DEADLINE

Router.post('/newdeadline',auth,async(req,res)=>{
    if(req.authenticated){
        var deadline = req.body
        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$push :{alldeadlines:deadline}})
        console.log(inserted)
        if(inserted!=null){
            res.json({'message':'updated!'})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})


//EDITING A TODO

Router.post('/todo',auth,async(req,res)=>{
    if(req.authenticated){
        var todo = req.body
        var newtodo= {
            date:todo.date,
            done:todo.done==='true'?true:false,
            text:todo.text,
            id:parseInt(todo.id)
        }
        console.log(todo.done,newtodo.done)
        var exists = await DB.collection('productivity').findOne({uid:req.uid,alltodos:{$elemMatch:{date:todo.date}}},{projection:{'alltodos.todos.$': 1 , _id: 0}})
        var index = exists.alltodos[0].todos.findIndex(a=>a.id == todo.id)

        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$set:{[`alltodos.$[date].todos.${index}`]:newtodo}},{
            "arrayFilters": [
                {"date.date" : todo.date},
            ]
        })
        console.log(inserted)
        if(inserted.modifiedCount!=0){
            res.json({'message':'updated!'})
        }else{
            res.json({'message':'error happened!'})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})

//DELETING A TODO 
Router.post('/tododel',auth,async(req,res)=>{
    if(req.authenticated){
        var todo = req.body

        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{
            $pull:{
                [`alltodos.$[date].todos`]:{id:parseInt(todo.id)}
            }},{
                "arrayFilters": [
                    {"date.date" : todo.date},
                ]
        })
        console.log(inserted)
        if(inserted.modifiedCount!=0){
            res.json({'message':'updated!'})
        }else{
            res.json({'message':'error happened!'})
        }

        //delete the date array if it is empty
        var empty = await DB.collection('productivity').findOne({uid:req.uid,alltodos:{$elemMatch:{date:todo.date}}},{projection:{'alltodos.todos.$': 1 , _id: 0}})
        if(empty.alltodos[0].todos.length==0){
            var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{
                $pull:{
                    alltodos:{date:todo.date}
                }})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})



// ADDING A NEW TODO

Router.post('/newtodo',auth,async(req,res)=>{
    if(req.authenticated){
        var todo = req.body
        var date = req.body.date
        var inserted = await DB.collection('productivity').findOne({uid:req.uid},{projection:{alltodos:1,_id:0}})
        console.log(inserted.alltodos)
        var dateexists = inserted.alltodos.filter(a=>a.date==date)
        if(dateexists.length>0){
        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$addToSet:{"alltodos.$[date].todos":todo}},{
            "arrayFilters": [
                {"date.date" : date},
              ]
        })
        }else{
            var data = {
                date:date,
                todos:[]
            }
            data.todos.push(todo)
        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$addToSet:{alltodos:data}})
        }
        console.log(inserted)
        if(inserted.modifiedCount!=0){
            res.json({'message':'updated!'})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})

//SETTING DATE OF BIRTH

Router.post('/dob',auth,async(req,res)=>{
    if(req.authenticated){
        var dob = req.body.dob
        console.log(dob,'this is dob')
        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$set :{dob:dob}})
        console.log(inserted)
        if(inserted!=null){
            res.json({'message':'updated!'})
        }else{
            res.json({'message':'not Updated'})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})

//ADDING A NEW NOTE

Router.post('/notes/new',auth,async(req,res)=>{
    if(req.authenticated){
        var notes = req.body
        console.log(notes,'these are notes')
        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$push :{allnotes:notes}})
        console.log(inserted)
        if(inserted!=null){
            res.json({'message':'updated!'})
        }else{
            res.json({'message':'not Updated'})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})

//DELETING A NOTE

Router.post('/notes/delete',auth,async(req,res)=>{
    if(req.authenticated){
        var note = req.body 
        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$pull :{allnotes:{id:parseInt(note.id)}}})
        
        console.log(inserted)
        if(inserted!=null){
            res.json({'message':'updated!'})
        }else{
            res.json({'message':'not Updated'})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})

// ADDING A NEW GOAL

Router.post('/newgoal',auth,async(req,res)=>{
    if(req.authenticated){
        var goal = req.body
        console.log(goal,'goal')
        var type = req.body.type
        var typewithouts = type.slice(0,-1)
        var number = (req.body.number).toString()
        var inserted = await DB.collection('productivity').findOne({uid:req.uid},{projection:{allgoals:1,_id:0}})
        var dateexists = inserted.allgoals[type].filter(a=>a.year||a.month||a.week==number)
        console.log(dateexists)
        if(dateexists.length>0){
        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$addToSet:{[`allgoals.${type}.$[number].goals`]:goal}},{
            "arrayFilters": [
                {[`number.${typewithouts}`] : number},
              ]
        })
        }else{
            var data = {
                [typewithouts]:number,
                goals:[]
            }
            data.goals.push(goal)
        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$addToSet:{[`allgoals.${type}`]:data}})
        }
        console.log(inserted)
        if(inserted.modifiedCount!=0){
            res.json({'message':'updated!'})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})




//EDITING A GOAL

Router.post('/goal',auth,async(req,res)=>{

    if(req.authenticated){
        var goal = req.body
        var type = req.body.type
        var newgoal= {
            created:goal.created,
            type:goal.type,
            number:goal.number,
            done:goal.done==='true'?true:false,
            text:goal.text?goal.text:'untitled',
            id:parseInt(goal.id)
        }
        console.log(goal,newgoal)
        var exists = await DB.collection('productivity').findOne({uid:req.uid},{projection:{[`allgoals`]: 1 , _id: 0}})
        var typenumber = exists.allgoals[type].findIndex(a=> a.week||a.year||a.month==goal.number)
        
        var index = exists.allgoals[type][typenumber].goals.findIndex(a=>a.id==goal.id)
        

        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$set:{[`allgoals.${type}.${typenumber}.goals.${index}`]:newgoal}})
        console.log(inserted)
        if(inserted.modifiedCount!=0){
            res.json({'message':'updated!'})
        }else{
            res.json({'message':'error happened!'})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})


//DELETING A GOAL

Router.post('/delgoal',auth,async(req,res)=>{

    if(req.authenticated){
        var goal = req.body
        var type = req.body.type
        var typewithouts = type.slice(0,-1)

        var exists = await DB.collection('productivity').findOne({uid:req.uid},{projection:{[`allgoals`]: 1 , _id: 0}})
        var typenumber = exists.allgoals[type].findIndex(a=> a.week||a.year||a.month==goal.number)
        

        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$pull:{[`allgoals.${type}.${typenumber}.goals`]:{id:parseInt(goal.id)}}})
        console.log(inserted)
        if(inserted.modifiedCount!=0){
            res.json({'message':'updated!'})
        }else{
            res.json({'message':'error happened!'})
        }

        if(exists.allgoals[type][typenumber].goals.length<2){
            var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{
                $pull:{
                    [`allgoals.${type}`]:{[typewithouts]:goal.number}
                }})
        }


    }else{
        res.json({message:'no user logged In'})
    }
})



// ADD A NEW LETTER

Router.post('/newLetter',auth,async(req,res)=>{
    if(req.authenticated){
        var data = req.body
        var inserted = await DB.collection('productivity').updateOne({uid:req.uid},{$push :{allletters:data}})
        console.log(inserted)
        if(inserted!=null){
            res.json({'message':'updated!'})
        }else{
            res.json({'message':'did not update'})
        }
    }else{
        res.json({message:'no user logged In'})
    }
})

module.exports = Router
