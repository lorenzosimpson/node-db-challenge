const db = require('./db-config')

function getResources() {
    return db
    .select('*')
    .from('resources')
}

module.exports = {
    getResources,
}