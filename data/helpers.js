const db = require('./db-config')

function getResources() {
    return db
    .select('*')
    .from('resources')
}

function addResource(resource) {
    return db('resources').insert(resource)
}

module.exports = {
    getResources,
    addResource,
}