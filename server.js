var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "handlebars");
app.use(express.static("public"));

var router = require("./controllers/burger_controllers.js");
app.use("/", router);

var PORT = process.env.PORT || 3000;
app.listen(PORT);