const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    image: {
        required: false,
        type: String,
    },
});

module.exports = mongoose.model('user', userSchema);
