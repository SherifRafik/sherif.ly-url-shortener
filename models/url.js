const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: String,
  id: String,
  count: {
    type: Number,
    default: 0
  }
});

const URL = mongoose.model("urls", urlSchema);

module.exports = URL;