const express = require('express');
const router = express.Router();
const discountCode = require('../controllers/discountCode');

router.get('/', discountCode.getAllDiscountCode);
router.get('/:id', discountCode.getDiscountCode);
router.post('/', discountCode.addDiscountCode);
router.put('/:id', discountCode.editDiscountCode);
router.patch('/:id', discountCode.editDiscountCode);
router.delete('/:id', discountCode.deleteDiscountCode);
module.exports = router;
