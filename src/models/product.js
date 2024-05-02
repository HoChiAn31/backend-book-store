const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    quantity: {
        require: true,
        type: Number,
    },
    categoryAllId: {
        require: true,
        type: schema.Types.String,
        ref: 'categoryAll',
    },
    categoryDetailId: {
        require: true,
        type: schema.Types.String,
        ref: 'categoryDetail',
    },
    categorySupplierId: {
        require: true,
        type: schema.Types.String,
        ref: 'categorySupplier',
    },
    categoryPublishId: {
        require: true,
        type: schema.Types.String,
        ref: 'categoryPublish',
    },
    categoryYearId: {
        require: true,
        type: schema.Types.String,
        ref: 'categoryYear',
    },
    image: {
        require: true,
        type: [String],
    },
    priceImport: {
        require: true,
        type: Number,
    },
    priceSell: {
        require: true,
        type: Number,
    },
    priceDiscount: {
        require: false,
        type: Number,
    },
    author: {
        require: true,
        type: String,
    },
    form: {
        require: true,
        type: String,
    },
    language: {
        require: true,
        type: String,
    },
    size: {
        require: true,
        type: String,
    },
    pageQuantity: {
        require: false,
        type: Number,
    },
    description: {
        require: true,
        type: String,
    },
    rate: {
        require: false,
        type: Number,
        default: 0,
    },
    ratingPoint: {
        require: false,
        type: Number,
        default: 0,
    },
    numberOfVisit: {
        require: false,
        type: Number,
        default: 0,
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

module.exports = mongoose.model('product', productSchema);
