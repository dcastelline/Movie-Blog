const db = require("../models");
const axios = require('axios');
const { response } = require("express");

function search (body) {
  axios.get("https://ott-details.p.rapidapi.com/search?title=" + body + "&page=1", {
    headers: {
      "x-rapidapi-key": process.env.RAPID_APIKEY,
      "x-rapidapi-host": "ott-details.p.rapidapi.com"
    }
  }).then(response => { console.log(response) })
  .catch(err => console.log(err));
  
}

module.exports = {
  find: function(req, res) {
    // find comments with matching movie key
    search();
    
    db.comment
      .findAll({
        attributes: [req.params.movieID, 'movieID']
      })
      .then(comments => res.json(comments))
      .catch(err => res.status(400).json(err));
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