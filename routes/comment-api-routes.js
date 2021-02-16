// Require models
const db = require('../models');

// Routes
module.exports = (app) => {
  app.get('/api/comments', (req, res) => {
    const query = {};
    if (req.query.movie_id) {
      query.MovieId = req.query.movie_id;
    }
    
    db.Comment.findAll({
      where: query,
      include: [db.Movie],
    }).then((dbComment) => res.json(dbComment));
  });

  // Get route for retrieving a single post
  app.get('/api/comments/:id', (req, res) => {
    
    db.Comment.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Movie],
    }).then((dbComment) => res.json(dbComment));
  });

  // POST route for saving a new post
  app.post('/api/comments', (req, res) => {
    db.Comment.create(req.body).then((dbComment) => res.json(dbComment));
  });

};
