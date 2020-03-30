const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
  res.write("<h1>Hello World</h1>");
  res.send();
});



app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
