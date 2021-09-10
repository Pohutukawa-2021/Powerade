const db = require('./db/db')

const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// Change to post
// pass this an object with property of sender id and receiver id
server.post('/messages/view', (req, res) => {
  db.getMessages(req.body)
    .then(message => {
      res.json(message)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR', err.message)
    })
})

server.post('/messages/send', (req, res) => {
  db.newMessage(req.body)
    .then(() => {
      res.status(201).send('Message Sent')
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR' + err.message)
    })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
