const express = require("express");
const app = express();
const db = require("./db.js");

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body


app.get("/", function (req, res) {
    res.send("Welcome to my hotel");
});

const personRoutes = require('./routes/personRoutes.js');
const menuRoutes = require('./routes/menuRoutes.js');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(8000, function () {
    console.log(`listening on port 8000!`);
});


