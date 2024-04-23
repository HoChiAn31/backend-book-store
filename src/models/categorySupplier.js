const mongoose = require('mongoose');

const categorySupplierSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
});

module.exports = mongoose.model('categorySupplier', categorySupplierSchema);
