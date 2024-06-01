const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new mongoose.Schema(
    {
        userId: {
            type: Schema.Types.String,
            ref: 'user',
            required: true,
        },
        productId: {
            type: [Schema.Types.String], // Correct type definition for an array of strings
            required: false,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('favorite', favoriteSchema);
