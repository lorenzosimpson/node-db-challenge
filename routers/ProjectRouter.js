const express = require('express')
const router = express.Router()

const Projects = require('../data/helpers')

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({ error: 'Failed to get projects'}))
})

router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(added => res.status(201).json(added))
    .catch(err => res.status(500).json({ error: 'Failed to add project'}))
})

module.exports = router;