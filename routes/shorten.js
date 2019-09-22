const express = require("express");
const router = express.Router();
const Joi = require("joi");

const URL = require("../models/url");
const schema = require("../models/validate");
const generateId = require("../public/js/generate-id");


router.post("/shorten-the-url", function (req, res) {
  const result = Joi.validate({
    url: req.body.url
  }, schema);
  if (result.error === null) {
    const id = generateId();
    URL.create({
      url: req.body.url,
      id: id
    }, function (err, createdURL) {
      if (err)
        res.render("error");
      else {
        res.redirect("/shortened-url/" + createdURL.id)
      }
    });
  } else {
    res.render("error");
  }
});

router.get("/shortened-url/:id", function (req, res) {
  URL.find({
    id: req.params.id
  }, function (err, shortenedUrl) {
    if (err)
      res.render("error");
    else {
      res.render("shorten", {
        createdURL: shortenedUrl[0]
      });
    }
  });
});

router.get("/:id", function (req, res) {
  URL.find({
    id: req.params.id
  }, function (err, shortenedUrl) {
    if (err || shortenedUrl.length == 0)
      res.render("error");
    else
      res.redirect(shortenedUrl[0].url);
  });
});

module.exports = router;