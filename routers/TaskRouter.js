const express = require('express')
const router = express.Router()

const Tasks = require('../data/helpers')

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({ error: 'Failed to get tasks'}))
})

module.exports = router;