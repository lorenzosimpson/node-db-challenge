const db = require('./db-config')

// RESOURCES
function getResources() {
    return db
    .select('*')
    .from('resources')
}

function addResource(resource) {
    return db('resources').insert(resource)
}



// PROJECTS
function getProjects() {
    return db
    .select('*')
    .from('projects')
}

function addProject(project) {
    return db('projects').insert(project)
}


module.exports = {
    getResources,
    addResource,
    getProjects,
    addProject,
}