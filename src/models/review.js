const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reviewerSchema = new schema(
    {
        userId: {
            required: false,
            type: schema.Types.String,
            ref: 'user',
        },
        userName: {
            required: false,
            type: String,
        },
        content: {
            required: false,
            type: String,
        },
        rating: {
            required: true,
            type: Number,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { _id: false },
);

const reviewSchema = new schema({
    productId: {
        required: true,
        type: schema.Types.String,
        ref: 'product',
    },
    reviewer: [reviewerSchema],
});

module.exports = mongoose.model('review', reviewSchema);
