const db = require("../models");
const axios = require('axios');

function search (body) {
  return axios.get("https://ott-details.p.rapidapi.com/search?title=" + body + "&page=1", {
    headers: {
      "x-rapidapi-key": process.env.RAPID_APIKEY,
      "x-rapidapi-host": "ott-details.p.rapidapi.com"
    }
  }).then(response => { return response.data })
  .catch(err => console.log(err));
  
}

module.exports = {
  find: async function(req, res) {
    // find comments with matching movie key
    const movie = await search(req.params.search);
    
    res.json(movie);
    
    // db.comment
    //   .findAll({
    //     attributes: [req.params.movieID, 'movieID']
    //   })
    //   .then(comments => res.json(comments))
    //   .catch(err => res.status(400).json(err));
  },
  create: function(req, res) {
    // create new comment
    db.comment 
      .create({
        body: req.params.body,
        movieID: req.params.movieID
      })
      .then(comment => res.json(comment))
      .catch(err => res.status(400).json(err));
  }
};