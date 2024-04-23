const express = require('express');
const router = express.Router();
const categoryDetail = require('../controllers/categoryDetail');

router.get('/', categoryDetail.getAllCategoryDetail);
router.get('/:id', categoryDetail.getCategoryDetail);
router.post('/', categoryDetail.addCategoryDetail);
router.put('/:id', categoryDetail.editCategoryDetail);
router.patch('/:id', categoryDetail.editCategoryDetail);
router.delete('/:id', categoryDetail.deleteCategoryDetail);
module.exports = router;
