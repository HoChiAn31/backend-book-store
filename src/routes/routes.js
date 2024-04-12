const express = require('express');
const router = express.Router();
const userRoute = require('./user');
const loginRoute = require('./login');
const categoryAll = require('./categoryAll');

router.use('/user', userRoute);
router.use('/login', loginRoute);
router.use('/categoryAll', categoryAll);

module.exports = router;
