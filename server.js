const express = require('express')

const ResourceRouter = require('./routers/ResourceRouter')

const server = express()
server.use(express.json())
server.use('/api/resources', ResourceRouter)

module.exports = server;