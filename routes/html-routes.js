// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads login.html
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../views/index.html'))
  );

  // index route loads index.html
  app.get('/login', (req, res) => {
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../views/login.html"));
  }
  );

  app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  })
};
