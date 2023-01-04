const router = require("express").Router();
const iaController = require('../controllers/ia');

router.get("/", iaController.runPython);
router.post("/", iaController.getPrediction);

module.exports = router;