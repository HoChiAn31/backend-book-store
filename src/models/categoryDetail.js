const mongoose = require('mongoose');

const categoryDetailSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
    categoryAll_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoryAll',
        required: true,
    },
});

module.exports = mongoose.model('categoryDetail', categoryDetailSchema);
