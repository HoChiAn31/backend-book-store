const mongoose = require('mongoose');

const categoryAllSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
});

module.exports = mongoose.model('categoryAll', categoryAllSchema);
