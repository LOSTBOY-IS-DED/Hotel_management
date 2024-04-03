const express = require("express");
const app = express();
const db = require("./db.js");
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT||3000;


app.get("/", function (req, res) {
    res.send("Welcome to my hotel");
});

const personRoutes = require('./routes/personRoutes.js');
const menuRoutes = require('./routes/menuRoutes.js');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(PORT, function () {
    console.log(`listening on port 8000!`);
});


