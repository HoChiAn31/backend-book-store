const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.get('/', user.getAllUser);
router.post('/', user.addUser);
router.get('/:id', user.getUser);
router.get('/:email', user.getUserEmail);
router.put('/:id', user.editUser);
router.patch('/:id', user.editUser);
router.delete('/:id', user.deleteUser);
module.exports = router;
