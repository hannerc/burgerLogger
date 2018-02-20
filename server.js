var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 8080;

//app.get();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});