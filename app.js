const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.get('/goodbye', (req, res) => {
    res.send('Goodbye, World!');
});

module.exports = app;
