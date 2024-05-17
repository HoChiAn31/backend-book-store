const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String,
    },
    products: [
        {
            productId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('cart', cartSchema);
