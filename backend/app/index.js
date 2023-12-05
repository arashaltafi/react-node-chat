const express = require('express');
const controllers = require('./controllers');
const cors = require('cors');
const app = express();

app.use(cors({
    credentials: true,
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})

module.exports = (port) => {
    controllers(app, port)
}