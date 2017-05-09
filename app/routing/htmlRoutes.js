// Dependency to ge the correct file path
var path = require("path");
//================================================================
module.exports = function(app){
//When user visits a page the user is shown an HTML page of content
//================================================
app.get("/survey" , function(req , res){
	console.log(path.join(__dirname, "/../public/survey.html"));
	res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

app.use(function(req , res){
	res.sendFile(path.join(__dirname, "/../public/home.html"));
});
};