// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");

const PORT = process.env.PORT || 3306;

// import { v4 as uuidv4 } from 'uuid';

// Requiring passport as we've configured it
// const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

// Serve static content
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// We need to use sessions to keep track of our user's login status
// app.use(session({
//   genid: function(req) {
//     return uuidv4();
//   }, 
//   secret: process.env.SESSION_SECRET, 
//   resave: true, 
//   saveUninitialized: true 
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// Requiring our routes
require('./controllers/controller.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
  });
});
