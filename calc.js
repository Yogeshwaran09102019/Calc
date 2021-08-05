const express=require("express");

const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000);

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmi.html")
})

app.post("/bmicalculator",function(req,res){
  var number1=Number(req.body.text1);
  var number2=Number(req.body.text2);
  var result= Math.floor(number1 / (number2 * number2));
  res.send("Your BMI is : "+result);
})

app.post("/",function(req,res){
  var number1=Number(req.body.num1);
  var number2=Number(req.body.num2);
  var result= number1 + number2;
  res.send("The Result is : "+result);
})
