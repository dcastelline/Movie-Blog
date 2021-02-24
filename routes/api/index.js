const router = require("express").Router();
const controller = require("../../controllers/controller");
require('dotenv').config();

router
  .route("/:search")
  .get(controller.find);

router
  .route("/comments")
  .post(controller.create);

module.exports = router;