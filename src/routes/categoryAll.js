const express = require('express');
const router = express.Router();
const categoryAll = require('../controllers/categoryAll');

router.get('/', categoryAll.getAllCategoryAll);
router.get('/:id', categoryAll.getCategoryAll);
router.post('/', categoryAll.addCategoryAll);
router.put('/:id', categoryAll.editCategoryAll);
router.patch('/:id', categoryAll.editCategoryAll);
router.delete('/:id', categoryAll.deleteCategoryAll);
module.exports = router;
