const express = require('express');
const router = express.Router();
const auth = require('../controllers/login');

router.post('/', auth.login);

module.exports = router;
