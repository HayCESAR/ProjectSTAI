
const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const fileController = require('../controllers/file');

router.get("/", fileController.getDocuments);

router.post("/download", fileController.downloadFile);

router.post("/upload", multer(multerConfig).single("file"), fileController.setDocument);

router.delete("/", fileController.deleteDocument);

module.exports = router;