const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    productId: {
        required: true,
        type: schema.Types.String,
        ref: 'product',
    },
    userId: {
        required: false,
        type: schema.Types.String,
        ref: 'user',
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
});

module.exports = mongoose.model('review', reviewSchema);
