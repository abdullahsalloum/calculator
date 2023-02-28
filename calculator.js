const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req , res){
  res.sendFile(__dirname + "/index.html");
});





app.get( "/bmicalculator" , function(req , res){
  res.sendFile(__dirname + "/bmiCalculator.html");

});




app.post("/bmicalculator"  , function(req , res){
    var W = parseFloat(req.body.wieght);
    var H = parseFloat(req.body.hieght);
    var result = W / (H * H);
    res.send("Your BMI is : " + result);
});





app.post("/" , function(req , res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    
    var result = num1 + num2;


    res.send("The result of the calculation is :" + result);
});

app.listen(3000 , function(){
    console.log("server is running at port 3000");
});