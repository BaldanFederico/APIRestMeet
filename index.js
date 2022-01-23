const express = require("express");
const app = express()
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