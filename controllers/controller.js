const express = require('express');
const router = express.Router();
const movie = require('../models/index.js');

// Create comment
// GET
router.get('/', (req, res) => {
    movie.all((data) => {
        const movieObj = {
            movies: data,
        };
        console.log(movieObj);
    });
});

// POST
router.post('api/movies', (req, res) => {
    movie.create(['comment'], [req.body.comment], (result) => {
        res.json({ id: result.insertId });
    });
});

// PUT
router.put('api/movies/:id', (req, res) => {
    const shared = `id = ${req.params.id}`;
    
    console.log('shared', shared);

    movie.update(
        {
            saved: req.body.save
        },
        saved,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// DELETE
router.delete('/api/movies/:id', (req, res) => {
    const shared = `id = ${req.params.id}`;

    movie.delete(shared, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Export router for server.js
module.exports = router;