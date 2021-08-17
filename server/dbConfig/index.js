require("dotenv").config()

const { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } = process.env

module.exports = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
}