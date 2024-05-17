const express = require('express');
const router = express.Router();
const cart = require('../controllers/cart');

router.get('/', cart.getAllCart);
router.get('/:id', cart.getCart);
router.get('/user/:userId', cart.getCartByUserId);

router.post('/', cart.addCart);
router.put('/:id', cart.editCart);
router.patch('/:id', cart.editCart);
router.patch('/user/:userId', cart.editCartUser);
router.delete('/:id', cart.deleteCart);
module.exports = router;
