const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
  res.render("home");
});

app.get("/addFood", function(req, res){
  res.render("addConsumable");
});

app.get("/workout", function(req, res){
  res.render("");
});

app.get("/addWorkout", function(req, res){
  res.render("addWorkout");
});

app.get("/calendar", function(req, res){
  res.render("");
});

app.get("/profile", function(req, res){
  res.render("");
});

app.get("/info", function(req, res){
  res.render("");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
