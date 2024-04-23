const express = require('express');
const router = express.Router();
const categoryYear = require('../controllers/categoryYear');

router.get('/', categoryYear.getAllCategoryYear);
router.get('/:id', categoryYear.getCategoryYear);
router.post('/', categoryYear.addCategoryYear);
router.put('/:id', categoryYear.editCategoryYear);
router.patch('/:id', categoryYear.editCategoryYear);
router.delete('/:id', categoryYear.deleteCategoryYear);
module.exports = router;
