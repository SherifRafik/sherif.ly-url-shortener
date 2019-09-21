const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/", require("./routes/index"));


app.listen(port, () => console.log(`Server started on port ${port}`));