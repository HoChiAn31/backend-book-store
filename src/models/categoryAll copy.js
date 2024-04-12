const mongoose = require('mongoose');

const categorySupplierAllSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
});

module.exports = mongoose.model('categoryAll', categorySupplierAllSchema);
