const db = require("../models");
const axios = require('axios');
const { Sequelize } = require('sequelize');

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
    const data = await search(req.params.search);

    if (!data) return;

    for (let i = 0; i <= (data.results.length - 1); i++) {
      data.results[i].comments = await db.Comment.findAll({
          where: {
            movieId: data.results[i].imdbid
          }
        });
    }

    res.json(data);
  },
  create: async function(req, res) {
    // create new comment
    await db.Comment 
      .create({
        body: req.body.body,
        movieId: req.body.movieId,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      });

      res.json(req.body);
  }
};