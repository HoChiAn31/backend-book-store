const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.get('/', product.getAllProduct);
router.get('/:id', product.getProduct);
router.post('/', product.addProduct);
router.put('/:id', product.editProduct);
router.patch('/:id', product.editProduct);
router.delete('/:id', product.deleteProduct);
module.exports = router;
