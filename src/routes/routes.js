const express = require('express');
const router = express.Router();
const userRoute = require('./user');
const loginRoute = require('./login');
const categoryAllRoute = require('./categoryAll');
const categorySupplierRoute = require('./categorySupplier');
const categoryPublishRoute = require('./categoryPublish');
const categoryYearRoute = require('./categoryYear');
const categoryDetailRoute = require('./categoryDetail');
const productRoute = require('./product');
const reviewRoute = require('./review');

router.use('/user', userRoute);
router.use('/login', loginRoute);
router.use('/categoryAll', categoryAllRoute);
router.use('/categorySupplier', categorySupplierRoute);
router.use('/categoryPublish', categoryPublishRoute);
router.use('/categoryYear', categoryYearRoute);
router.use('/categoryDetail', categoryDetailRoute);
router.use('/product', productRoute);
router.use('/review', reviewRoute);

module.exports = router;
