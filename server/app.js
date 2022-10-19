const express = require('express')
const app = express()

const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser'); 

const newUser = require("./routes/newUser")
const verifyMail = require("./routes/verifyMail")
const login = require("./routes/login")
const getData = require("./routes/GetRequest")
const postData = require("./routes/PostRequest")
const deleteUser = require("./routes/delete")
const logout = require("./routes/logout")
const authfn = require("./functions/authfn")

const mongoClient = require('mongodb').MongoClient;

app.use(express.static("client"));
  

app.use(cookieParser())
require('dotenv').config()
app.use(bodyParser.json())

const port =   3000

const server = app.listen(port,()=>{
    console.log('listening')
})

const io = require('socket.io')(server);

app.set('socketio', io);

// CONNECT TO DATABASE
var DB;
mongoClient.connect(url=process.env.DB).then(client=>{
    DB = client.db('new')
}).catch(err=>console.log(err))
// CONNECT TO DATABASE


// SOCKET TO EDIT NOTE DATA
io.on('connection',async socket=>{
    var auth = socket.handshake.headers.cookie
    console.log(auth,'auth')
    var token0 = auth.split(';',);
    var token1 = token0[0].split('=')
    console.log(token1)
    var uid = await authfn(token1[1])
    socket.on('disconnect',()=>{
        console.log(socket.id)
    })
    socket.on('noteedit',async (e)=>{
        console.log('now')
        var t = await DB.collection('productivity').updateOne({uid:uid},
            {$set:{"allnotes.$[note].data":e.data}},{
            "arrayFilters": [
              {"note.id" : e.id},
            ]
        })
        console.log(t,'t')
    })
})


app.use('/verifyEmail',verifyMail)

app.use('/registeruser',newUser)

app.use('/loginuser',login)

app.use('/logoutuser',logout)

app.use('/deleteuser',deleteUser)

app.use('/getData',getData)

app.use('/postData',postData)




