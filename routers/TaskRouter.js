const express = require('express')
const router = express.Router()

const Tasks = require('../data/helpers')

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({ error: 'Failed to get tasks'}))
})

router.post('/', (req, res) => {
    Tasks.addTask(req.body)
    .then(added => res.status(200).json(added))
    .catch(err => res.status(500).json({ error: 'Failed to add task'}))
})

module.exports = router;