const mongoose = require('mongoose');
require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

async function connect() {
    mongoose
        .connect(mongoString)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
}

module.exports = { connect };
