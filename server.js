// Requiring necessary npm packages
const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

// Setting up port and requiring models for syncing
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

// Serve static content
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Requiring our routes
app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
  });
});
