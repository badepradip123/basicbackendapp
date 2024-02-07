require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!---')
})

app.get('/home', (req, res) => {
    res.send('welcome to home')
})

app.get('/login', (req, res) => {
    res.send('<h1>welcome to login</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})