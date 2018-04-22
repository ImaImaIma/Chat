'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(8888);

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
    res.render('index');
});

app.use((req, res) => { 
    // res.type('text/plain');
    res.status(404);
    // res.send('404 - not found')
    res.render(404);
});

app.use((err, req, res, next) => {
    // console.error(err.stack)
    // res.type('text/plain');
    res.status(500);
    // res.send('500 - Error of Server')
    res.render('500')
});
