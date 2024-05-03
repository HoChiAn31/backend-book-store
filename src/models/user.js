const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: Number,
    },
    birthday: {
        required: false,
        type: Date,
    },
    gender: {
        required: false,
        type: String,
    },
    address: {
        required: true,
        type: String,
    },
    country: {
        required: false,
        type: String,
    },
    city: {
        required: false,
        type: String,
    },
    district: {
        required: false,
        type: String,
    },
    ward: {
        required: false,
        type: String,
    },
    image_url: {
        required: false,
        type: String,
    },
    pointCoin: {
        required: false,
        type: Number,
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
                required: false,
            },
        },
    ],
    role: {
        required: false,
        type: String,
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('user', userSchema);
