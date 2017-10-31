var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/index");
})

router.get("/index", function(req, res) {
  
})

// module.exports = controller;