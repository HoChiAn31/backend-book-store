const mongoose = require('mongoose');

const discountCodeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        condition: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        applicableCode: {
            type: Number,
            required: true,
        },
        priceCode: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('discountCode', discountCodeSchema);
