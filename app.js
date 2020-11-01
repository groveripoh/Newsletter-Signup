const express=require("express");
const bodyParser=require("body-parser");
const got= require("got");
const app= express();

app.use (bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function (req, res){

var firstName=req.body.fName;
var lastName=req.body.stName;
var email = req.body.inEmail;
console.log(firstName, lastName, email);

});

app.listen(3000, function(){
  console.log("server is runnning on port 3000")
});
