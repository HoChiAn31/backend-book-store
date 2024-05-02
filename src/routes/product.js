const express = require('express');
const router = express.Router();
const product = require('../controllers/product');
const { uploadMultiple } = require('../middleware/multer');

router.get('/', product.getAllProduct);
router.get('/:id', product.getProduct);
router.post('/add-product', uploadMultiple, product.addProduct);
router.post('/', product.addProduct);
router.put('/:id', product.editProduct);
router.patch('/:id', product.editProduct);
router.delete('/:id', product.deleteProduct);
module.exports = router;
