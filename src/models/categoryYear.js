const mongoose = require('mongoose');

const categoryYearSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
});

module.exports = mongoose.model('categoryYear', categoryYearSchema);
