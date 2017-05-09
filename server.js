
//==================================================================
var express = require("express");
var bodyParser = require("body-parser");
//==================================================================

//we create an express server here
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//====================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//=====================================================================

//Listener
//The below code effectively starts our server
app.listen(PORT , function(){
	console.log("App listening on PORT: " + PORT);
});