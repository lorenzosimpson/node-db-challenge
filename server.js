const express = require('express')

const ResourceRouter = require('./routers/ResourceRouter')
const ProjectRouter = require('./routers/ProjectRouter')

const server = express()
server.use(express.json())
server.use('/api/resources', ResourceRouter)
server.use('/api/projects', ProjectRouter)

module.exports = server;