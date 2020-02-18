const { Router } = require('express');

const WorkersController = require('./app/controllers/WorkersController');

const routes = new Router();

/* Return all Workers / Create a Workers */
routes.get('/api/workers', WorkersController.index);
routes.get('/api/workers/:office', WorkersController.show);
routes.post('/api/workers', WorkersController.store);

/* Update a workers with base in your 'ID' */
routes.put('/api/workers/:id', WorkersController.update);

/* Delete a workers with base in your 'ID' */
routes.delete('/api/workers/:id', WorkersController.delete);

module.exports = routes;
