const express = require('express')

const ResourceRouter = require('./routers/ResourceRouter')
const ProjectRouter = require('./routers/ProjectRouter')
const TaskRouter = require('./routers/TaskRouter')

const server = express()
server.use(express.json())
server.use('/api/resources', ResourceRouter)
server.use('/api/projects', ProjectRouter)
server.use('/api/tasks', TaskRouter)

module.exports = server;