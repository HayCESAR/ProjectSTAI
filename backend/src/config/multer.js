const multer = require("multer");
const path = require("path");
const FirebaseStorage = require('multer-firebase-storage');

const storage = FirebaseStorage({
    bucketName: process.env.FIREBASE_STORAGE_BUCKET,
    credentials: {
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: process.env.FIREBASE_PROJECT_ID
    },
    directoryPath: 'datasets'
  });

module.exports = {
    storage: storage,
    limits: {
      fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
      const allowedMimes = [
        "text/csv"
      ];
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type."));
      }
    }
};