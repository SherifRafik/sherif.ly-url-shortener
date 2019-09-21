const express = require("express");
const router = express.Router();
const Joi = require("joi");

const URL = require("../models/url");
const schema = require("../models/validate");
const generateId = require("../public/js/generate-id");


router.post("/shorten", function (req, res) {
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
        res.render("shorten.ejs", {
          createdURL: createdURL
        });
      }
    });
  } else {
    res.render("error");
  }
});

router.get("/:id", function (req, res) {
  URL.find({
    id: req.params.id
  }, function (err, shortenedUrl) {
    if (err)
      res.render("error");
    else {
      res.redirect(shortenedUrl[0].url);
      console.log(shortenedUrl[0].url);
    }
  });
});

module.exports = router;