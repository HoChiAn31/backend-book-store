const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    totalPrice: {
        required: true,
        type: Number,
    },
    orderStatus: {
        required: true,
        type: String,
    },
    reasonStatus: {
        type: String,
        required: false,
    },
    paymentMethod: {
        type: String,
        required: true,
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

module.exports = mongoose.model('payment', paymentSchema);
