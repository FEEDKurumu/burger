var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/index");
})

router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var burgers = {burgers: data}
    res.render("index", burgers);
  })
})

router.post("/api/new", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  })
})

router.post("/eat/:id", function(req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect("/");
  })
})

module.exports = router;