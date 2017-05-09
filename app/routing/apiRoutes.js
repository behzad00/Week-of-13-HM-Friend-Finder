



//===========================================================================

var friends = require("../data/friends");
//==============================================================

module.exports = function(app){

	// user are shown a JSON data

	app.get("/api/friends" , function(req , res){
		res.json(friends);
	});
	// for( var i =0 ; i < frineds.length ; i++)
	// {

		// friends.push(req.body);
		// res.json(
		// {
		// 	messege : "Best Match"
		// }
		// );
	// }
};
