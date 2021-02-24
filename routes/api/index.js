const router = require("express").Router();
const controller = require("../../controllers/controller");
require('dotenv').config();

router
  .route("/:search")
  .get(controller.find)
  .post(controller.create);

module.exports = router;