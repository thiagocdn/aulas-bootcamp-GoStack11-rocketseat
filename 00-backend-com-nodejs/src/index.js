const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/projects/:id', validadeProjectId);

const projects = [];

function validadeProjectId(request, response, next){
  const { id } = request.params;

  if(!isUuid(id)) return (response.status(400).json({ error: 'Invalid ID. (Middleware)' }));

  return next();

}

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  results = title ?
    projects.filter(project => project.title.includes(title)) :
    projects;

  results = owner ?
    results.filter(project => project.owner.includes(owner)) :
    results;

  return response.json(results);
});


app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  const id = uuid();

  const project = { id, title, owner };
  projects.push(project);

  return response.json(project);
});


app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not Found'});
  }

  const project = { id, title, owner };

  projects[projectIndex] = project;

  return response.json(project);
});


app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not Found'});
  }

  projects.splice(projectIndex, 1);

  return response.json({ 'delete': 'Successfully' });

});

app.listen(3333, () => {
  console.log('Servidor iniciado.')
});