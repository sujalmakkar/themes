const express = require('express')
const app = express()


// app.use(express.static('./client'))

app.get('/',(req,res)=>{
    res.send('I am a running server!!')
})

app.listen(3000, ()=>{
    console.log('listening')
})