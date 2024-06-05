const express = require('express');
const router = express.Router();
const cart = require('../controllers/cart');

router.get('/', cart.getAllCart);
router.get('/:id', cart.getCart);
router.get('/user/:userId', cart.getCartByUserId);
router.post('/edit/:userId', cart.editCartByUserId);
router.post('/', cart.addCart);
router.put('/edit/:userId', cart.editCartByUserId);
router.put('/:id', cart.editCart);
router.patch('/:id', cart.editCart);
router.patch('/user/cancel/:userId', cart.editCancelCartByUserId);
router.patch('/user/:userId', cart.editCartUser);
router.delete('/:id', cart.deleteCart);
module.exports = router;
