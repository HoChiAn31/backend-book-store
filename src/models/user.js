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
    phone: {
        required: true,
        type: number,
    },
    address: {
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
    pointCoin: {
        required: false,
        type: number,
    },
    isReview: {
        required: false,
        type: Boolean,
        default: false,
    },
    isBan: {
        required: false,
        type: Boolean,
        default: false,
    },
    categoryDetail: [
        {
            categoryDetailId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'categoryDetail',
                required: false,
            },
            count: {
                type: Number,
                default: 0,
            },
        },
    ],
    role: {
        required: false,
        type: String,
        default: 'user',
    },
});

module.exports = mongoose.model('user', userSchema);
