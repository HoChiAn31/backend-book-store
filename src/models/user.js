const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        required: false,
        type: String,
    },
    lastName: {
        required: false,
        type: String,
    },
    fullName: {
        required: true,
        type: String,
    },

    phone: {
        required: false,
        type: Number,

    email: {
        required: true,
        unique: true,
        type: String,

    },
    birthday: {
        required: false,
        type: Date,
    },
    gender: {
        required: false,
        type: String,
    },

    addresses: {
        phoneNumber: String,
        ward: String,
        district: String,
        province: String,

    },
    img: {
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
