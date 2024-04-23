const express = require('express');
const router = express.Router();
const categoryPublish = require('../controllers/categoryPublish');

router.get('/', categoryPublish.getAllCategoryPublish);
router.get('/:id', categoryPublish.getCategoryPublish);
router.post('/', categoryPublish.addCategoryPublish);
router.put('/:id', categoryPublish.editCategoryPublish);
router.patch('/:id', categoryPublish.editCategoryPublish);
router.delete('/:id', categoryPublish.deleteCategoryPublish);
module.exports = router;
