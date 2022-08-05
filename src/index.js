const express = require('express');
const bodyParser = require('body-parser');

const { routes: planetRoutes } = require('./routes/planetRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/planet', planetRoutes);

module.exports = app;