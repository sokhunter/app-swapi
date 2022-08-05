const express = require('express');
const planet = require('../app/planet');

const routes = express.Router({
    mergeParams: true
});

// Database functions
routes.get('/show-from-database/:id', planet.show);
routes.get('/show-all-from-database/', planet.showAll);
routes.post('/save-to-database/', planet.save);

module.exports = {
    routes,
}