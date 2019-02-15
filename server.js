const express = require('express');

const app = express();

const archer = {
    name: "Sterling Archer",
    obsessions: [
        'spying',
        'sarcasm',
        'Kenny Loggins',
        'deep-rooted emotional problems'
    ]
}

// app.set and app.get are used for configuring
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

app.get("/", function(req, res) {
    res.render('index', archer);
})

app.listen(3000);