const db = require('./db-config')

function intToBoolean(int) {
    return int === 1 ? true : false;
  }

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
    .then(projects => projects.map(each => {
        let completed = each.completed !== 0
        return {
            ...each,
            completed
        }
    }))
}

function addProject(project) {
    return db('projects').insert(project)
}


/*
select *
select description as task_description, name as project_name, projects.description as project_description, completed
from tasks
join projects on project_id = projects.id;
*/


function getTasks() {
    return db
    .select('tasks.*', 'projects.name as project_name', 'projects.description as project_description')
    .from('tasks')
    .join('projects', 'project_id', 'projects.id')
    .then(tasks => tasks.map(each => {
        let completed = each.completed !== 0
        return {
            ...each,
            completed
        }
    }))
}

function addTask(task) {
    return db('tasks').insert(task)
}


module.exports = {
    getResources,
    addResource,
    getProjects,
    addProject,
    getTasks,
    addTask,
}