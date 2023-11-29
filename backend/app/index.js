const express = require('express');
const controllers = require('./controllers');
const cors = require('cors');
const app = express();

app.use(cors({
    credentials: true,
}));

module.exports = (port) => {
    controllers(app, port)
}