require('dotenv').config()

const express = require('express')
const server = express()

server.use(express.json())

server.get('/hello', (req, res) => {
    res.send('<h1>Hello World ')
})

const port= process.env.PORT || 3000

server.listen(port, () => {
    console.log(`****Listening on ${port}****`)
})