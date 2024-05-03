const express = require('express');
const router = express.Router();
const review = require('../controllers/review');

router.get('/', review.getAllReview);
router.get('/:id', review.getReview);
router.post('/', review.addReview);
router.put('/:id', review.editReview);
router.patch('/:id', review.editReview);
router.delete('/:id', review.deleteReview);
module.exports = router;
