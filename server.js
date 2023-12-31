const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, (path.join('public', 'paper.pdf'))))
})

server.listen(port)