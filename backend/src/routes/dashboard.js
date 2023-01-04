const router = require("express").Router();
const iaController = require('../controllers/ia');

router.get("/", iaController.getCharts);

module.exports = router;