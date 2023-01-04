
const admin = require("firebase-admin");

const db = admin.initializeApp({
    credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
});

module.exports = db;