const express = require("express");
const bodyPraser = require("body-parser");

const app = express();

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("Server Initiated");
});

app.get('/styles.css', function (req, res){
    res.sendFile(__dirname + "/styles.html");
});

app.get('/script.js', function (req, res){
    res.sendFile(__dirname + "/script.js");
});