const express = require('express')
const app = express()
var cookie = require("cookie")
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser'); 
const path = require('path');
const newUser = require("./routes/newUser")
const verifyMail = require("./routes/verifyMail")
const login = require("./routes/login")
const getData = require("./routes/GetRequest")
const postData = require("./routes/PostRequest")
const deleteUser = require("./routes/delete")
const logout = require("./routes/logout")
const authfn = require("./functions/authfn")

const mongoClient = require('mongodb').MongoClient;

app.use('/app', express.static('client'))
// app.get('/login', function(req, res) {
//     res.sendFile(path.join(__dirname, '../client/login.html'));
//   });
app.use('/login', express.static('client/LoginPageIndex'))
app.use('/register', express.static('client/RegisterPageIndex'))
  

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
    var cookies = cookie.parse(socket.handshake.headers.cookie);    
    var token = cookies['auth-token']
    console.log(cookies,token)
    var uid = await authfn(token)
    socket.on('disconnect',()=>{
        console.log(socket.id)
    })
    socket.on('noteedit',async (e)=>{
        await DB.collection('productivity').updateOne({uid:uid},
            {$set:{"allnotes.$[note].data":e.data}},{
            "arrayFilters": [
              {"note.id" : e.id},
            ]
        })
    })
})


app.use('/verifyEmail',verifyMail)

app.use('/register/registeruser',newUser)

app.use('/login/loginuser',login)

app.use('/app/logoutuser',logout)

app.use('/app/deleteuser',deleteUser)

app.use('/app/getData',getData)

app.use('/app/postData',postData)




