var createError = require('http-errors');
var express = require('express');
var path = require('path');
const PORT = 8000;
const product = require('./api/product')

var app = express();
app.use(express.json());

app.use('/api/product', product)

app.get('/',(req,res)=>{
    console.log('Express app running.')
    return res.send('Express app is running.')
})


app.listen(PORT, () => [
  console.log('Running on Port', PORT)
])

module.exports = app;
