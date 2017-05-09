var friendsArray = [
{
	"name" : "Justin",
	"photo": "https://az616578.vo.msecnd.net/files/responsive/cover/main/desktop/2016/05/13/635986987603448787-1736851182_mgid-uma-video-mtv.jpg",
	"scores": [
		1,
		2,
		3,
		4,
		5,
		1,
		2,
		3,
		4,
		5
	],
	 // totalScores: friendsArray[0].scores.reduce(function(a ,b){return a+b}, 0)

}
];
console.log(friendsArray[0].scores[0])
// console.log(friendsArray[0].totalScores);
//We export it
module.exports = friendsArray;