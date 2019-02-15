const express = require('express');

const app = express();

// app.set and app.get are used for configuring
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

app.get("/", function(req, res) {
    res.render('index', {name: "Sterling Archer"});
})
