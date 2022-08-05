const express = require('express');
const planet = require('../app/planet');

const routes = express.Router({
    mergeParams: true
});

// Database functions
routes.get('/show-from-database/:id', planet.show);

module.exports = {
    routes,
}