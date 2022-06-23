const express = require('express');
const app = express();
const noteRouter = require('./htmlRoutes');

app.use('/notes', noteRouter);
module.exports = app;