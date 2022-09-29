const express = require('express')
const app = express()
const cheerio = require("cheerio");
const axios = require("axios");
const cors = require('cors');

app.use(cors())

app.get('/',(req,res)=>{
    res.send('I am a running server!!')
})

app.listen(3000, ()=>{
    console.log('listening')
})

app.post('/getMusic/:query/:page',async (req,res)=>{
    var query = req.params.query
    var page = req.params.page
    var hey = await findMusic(query,page)
    
    res.send(hey)
})

// findMusic(mood,2)

// async function findMusic(query,page){

// }

// https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3

// https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3