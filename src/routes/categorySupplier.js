const express = require('express');
const router = express.Router();
const categorySupplier = require('../controllers/categorySupplier');

router.get('/', categorySupplier.getAllCategorySupplier);
router.get('/:id', categorySupplier.getCategorySupplier);
router.post('/', categorySupplier.addCategorySupplier);
router.put('/:id', categorySupplier.editCategorySupplier);
router.patch('/:id', categorySupplier.editCategorySupplier);
router.delete('/:id', categorySupplier.deleteCategorySupplier);
module.exports = router;
