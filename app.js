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

const URI = process.env.MONGO_URI || "mongodb://localhost/url-shortener";
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/", require("./routes/index"));
app.use("/", require("./routes/shorten"));

app.listen(port, () => console.log(`Server started on port ${port}`));