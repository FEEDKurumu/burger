var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");

var controller = require("./controllers/burger_controllers.js");
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

var burger = require("./models/burger.js");


app.listen(PORT);