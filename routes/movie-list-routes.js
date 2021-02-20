const db = require('../models');

module.exports = (app) => {
    app.get('/api/movie-watch-list', (req, res) => {
        db.Movie.findAll({
            // include: [db.User.email]
        })
        .then((dbMovie) => res.json(dbMovie))
    })

    app.get('/api/movie-watch-list/:id', (req, res) => {
        db.Movie.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((dbMovie) => res.json(dbMovie))
    })
    
    app.post('/api/movie-watch-list', (req, res) => {
        db.Movie.create({
            title: req.body.title,
            synopsis: req.body.synopsis,
            releaseYear: req.body.year,
            service: req.body.service
        })
        .then((dbMovie) => res.json(dbMovie))
    })

    app.delete('/api/movie-watch-list/:id', (req, res) => {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((dbMovie) => res.json(dbMovie))
    })
}