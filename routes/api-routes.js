//Movie information 
async function getMovie() {
	await fetch("https://ott-details.p.rapidapi.com/search?title=%20endgame&page=1", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "bc1026b9b5msh09f9bd72ecaf669p16f9e1jsn203e48375d38",
			"x-rapidapi-host": "ott-details.p.rapidapi.com"
		}
	})
		.then(response => response.json())
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.error(err);
		});
}
// platform information
async function getPlatform() {
	await fetch("https://ott-details.p.rapidapi.com/getPlatforms?region=IN", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "bc1026b9b5msh09f9bd72ecaf669p16f9e1jsn203e48375d38",
			"x-rapidapi-host": "ott-details.p.rapidapi.com"
		}
	})
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.error(err);
		});
}