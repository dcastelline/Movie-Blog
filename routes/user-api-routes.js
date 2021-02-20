const db = require('../models');
const passport = require("../config/passport");

module.exports = function (app) {
    app.post('/api/signup', (req, res) => {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(() => res.redirect(307, '/api/login'))
        .catch(() => res.status(401).json(err));
    });

    app.post('/api/login', passport.authenticate("local"), (req, res) => {
        res.json(req.user);
    });

    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
      });

    app.get("/api/user_data", function(req, res) {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
        email: req.user.email,
        id: req.user.id
        });
    }
    });
}