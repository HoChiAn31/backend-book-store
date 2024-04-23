const mongoose = require('mongoose');

const categoryPublishSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
});

module.exports = mongoose.model('categoryPublish', categoryPublishSchema);
