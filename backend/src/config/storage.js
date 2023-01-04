const {Storage} = require('@google-cloud/storage');

module.exports = new Storage({
    bucketName: process.env.FIREBASE_STORAGE_BUCKET,
    credentials: {
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    project_id: process.env.FIREBASE_PROJECT_ID
    }
});