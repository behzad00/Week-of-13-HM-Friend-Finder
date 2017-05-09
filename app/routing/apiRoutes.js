



//===========================================================================

var friends = require("../data/friends");
//==============================================================

module.exports = function(app){

	// user are shown a JSON data

	app.get("/api/friends" , function(req , res){
		res.json(friends);
	});

	app.post("/api/friends" , function(req , res){
		friends.push(req.body);
		res.json(
		{
			messege : "Best Match"
		}
		);
	});
};