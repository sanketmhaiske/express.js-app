var createError = require('http-errors');
var express = require('express');
var path = require('path');

const PORT = 4000;

var app = express();
app.use(express.json());


app.get('/', (req, res) => {
    console.log('Express app running.')
    return res.send('Vercel Express app is running.')
})


app.listen(PORT, () => [
    console.log('Running on Port', PORT)
])

module.exports = app;
