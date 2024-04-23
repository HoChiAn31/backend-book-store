const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
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
    categoryTrademarkId: {
        require: true,
        type: schema.Types.String,
        ref: 'categoryTrademark',
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
    priceOld: {
        require: true,
        type: Number,
    },
    priceCurrent: {
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
        require: true,
        type: Number,
    },
    ratingPoint: {
        require: true,
        type: Number,
    },
    numberOfVisit: {
        require: true,
        type: Number,
    },
});

module.exports = mongoose.model('product', productSchema);
