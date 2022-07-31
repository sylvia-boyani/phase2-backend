const express = require('express')
const app = express()
const videoData = require('./videos.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Travel Videos")
})

app.get('/videos', (req, res) => {
    res.send(videoData)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})