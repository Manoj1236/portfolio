const express = require("express");
const app= express();
const path = require('path')

app.get("/", function(req, res){
res.sendFile(__dirname + '/index.html');
app.use(express.static(path.join(__dirname, 'public')));
});
 
app.listen(2000, function(){
console.log("my firstr server is  created");
}); 