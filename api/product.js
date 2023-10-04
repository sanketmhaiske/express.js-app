var express = require('express');
const router = express.Router();
var path = require('path');

const PORT = 4000;

var app = express();
app.use(express.json());


app.get('/', (req, res) => {
    return res.send('Vercel Product Express app is running.')
})


module.exports = router;
