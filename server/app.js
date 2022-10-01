const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('I am a running server!!')
})

app.post('/registeruser',(req,res)=>{
    var localTime = req.body.time
    res.json({'message':'info received'})
    console.log((new Date()).getTime(),new Date(localTime))
})

app.listen(3000, ()=>{
    console.log('listening')
})