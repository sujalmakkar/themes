const express = require('express')
const app = express()


// app.use(express.static('./client'))

app.get('/',(req,res)=>{
    res.send('I am a running server!!')
})

app.listen(3000, ()=>{
    console.log('listening')
})

// https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3

// https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3