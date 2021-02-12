var unirest = require("unirest");

var req = unirest("GET", "https://ott-details.p.rapidapi.com/getPlatforms");

req.query({
	"region": "US"
});

req.headers({
	"x-rapidapi-key": "bc1026b9b5msh09f9bd72ecaf669p16f9e1jsn203e48375d38",
	"x-rapidapi-host": "ott-details.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});