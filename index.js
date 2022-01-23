const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
const port = 3000;
const host = "localhost";
let jsonFile = require('jsonfile');
console.log("Works");

app.listen(port, host, () => {
console.log("server running at http://%s:%d", host, port);
});

app.post("/login", (req, res) => {
var username = req.body.username;
var password = req.body.password;
fs.readFile("user.json", "utf8", (err, jsonString) => {
if(err) {
console.log("Error reading file");
}
var x=JSON.parse(jsonString);
if(x["username"]==username && x["password"]==password) {
res.send("Login successful");
}else{
res.send("Error");
//console.log(username);
}
});
});



app.post("/addADP", (req, res) => {
var username = req.body.username;
var password = req.body.password;
var ADP = req.body.ADP;
    
fs.readFile("user.json", "utf8", (err, jsonString) => {
if(err) {
console.log("Error reading file");
}
var x = JSON.parse(jsonString);
if(x["username"]==username && x["password"]==password) {
x["ADP"]=ADP;
fs.writeFileSync("user.json", "    ");
var y = JSON.stringify(x);
fs.writeFileSync("user.json", y);
res.send("ADP write successful");
}else{
res.send("Error");
}
});
});


app.post("/deleteAcc", (req, res) => {
var username = req.body.username;
var password = req.body.password;
fs.readFile("user.json", "utf8", (err, jsonString) => {
if(err) {
console.log("Error reading file");
}
var x=JSON.parse(jsonString);
if(x["username"]==username && x["password"]==password) {
fs.writeFileSync("user.json", "        ");
res.send("Delete account successfully");
}else{
res.send("Error");
}
});
});


app.post("/viewMeet", (req, res) => {
fs.readFile("meet.json", "utf8", (err, jsonString) => {
if(err) {
console.log("Error reading file");
}else{
var x = JSON.parse(jsonString);
res.send(x["name"]+ " , "+x["ADPmeet"]+" ,  "+x["date"]+ " ,  "+x["hour"]);
}
});
});

app.post("/addMeet", (req, res) => {
var username = req.body.username;
var password = req.body.password;
var name = req.body.name;
var ADPmeet = req.body.ADPmeet;
var date = req.body.date;
var hour = req.body.hour;
fs.readFile("user.json", "utf8", (err, jsonString) => {
if(err) {
console.log("Error reading file");
}
var x = JSON.parse(jsonString);
if(x["username"]==username && x["password"]==password) {
var z = ("name: "+name+ " , "+ "ADPmeet: "+ADPmeet+ " , " +" date: "+date+ " , " +"hour: "+hour);
fs.writeFileSync("meet.json", "    ");
var y = JSON.stringify(z);
fs.writeFileSync("meet.json", y);
res.send("Meet create successful");
}else{
res.send("Error");
}
});
});
