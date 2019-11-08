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

// RESOURCES
/*
select description as task_description, name as project_name, projects.description as project_description, completed
from tasks
 join projects on project_tasks.project_id = projects.id 
 join project_tasks on task_id = tasks.id;
*/

function getTasks() {
    return db
    .select('tasks.*', 'projects.name as project_name', 'projects.description as project_description')
    .from('tasks')
    .join('projects', 'project_tasks.project_id', '=', 'projects.id')
    .join('project_tasks', 'task_id', '=', 'tasks.id')

}


module.exports = {
    getResources,
    addResource,
    getProjects,
    addProject,
    getTasks,
}