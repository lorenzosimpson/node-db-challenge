const express = require('express')
const router = express.Router()

const Resources = require('../data/helpers')

router.get('/', (req, res) => {
    Resources.getResources()
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ error: 'Failed to get resources'}))
})

router.post('/', (req, res) => {
    Resources.addResource(req.body)
    .then(added => res.status(201).json(added))
    .catch(err => res.status(500).json({ error: 'Failed to add resource'}))
})

module.exports = router;