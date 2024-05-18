const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.String,
        ref: 'user',
        required: true,
    },
    status : {
        type: String,
        default : 'active',
    },
    products: [
        {
            productId: {
                type: Schema.Types.String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default : 1,
            },
        },
    ]
},{
    timestamps: true,
});

module.exports = mongoose.model('cart', cartSchema);
