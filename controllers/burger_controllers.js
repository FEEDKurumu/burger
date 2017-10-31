var burger = require("../models/burger.js");
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.render("index", {burgers: [id: 1, burger_name: "big mac"]})
})