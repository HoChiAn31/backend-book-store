const express = require('express');
const router = express.Router();
const payment = require('../controllers/payment');

router.get('/', payment.getAllPayment);
router.get('/:id', payment.getPayment);
router.get('/user/:userId', payment.getPaymentByUserId);

router.post('/', payment.addPayment);
router.put('/:id', payment.editPayment);
router.patch('/:id', payment.editPayment);
router.patch('/user/:userId', payment.editPaymentUser);
router.delete('/:id', payment.deletePayment);
module.exports = router;
