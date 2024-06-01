const express = require('express');
const router = express.Router();
const favorite = require('../controllers/favorite');

router.get('/', favorite.getAllFavorite);
router.get('/:id', favorite.getFavorite);
router.get('/user/:userId', favorite.getFavoriteByUserId);
router.post('/edit/:userId', favorite.editFavoritesByUserId);
router.post('/', favorite.addFavorite);
router.put('/:id', favorite.editFavorite);
router.put('/edit/:userId', favorite.editFavoritesByUserId);
router.patch('/user/:userId', favorite.editFavoritesByUserId);
router.patch('/:id', favorite.editFavorite);
router.delete('/:id', favorite.deleteFavorite);
module.exports = router;
