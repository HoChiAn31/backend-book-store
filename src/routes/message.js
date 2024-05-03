const express = require('express');
const router = express.Router();
const messages = require('../controllers/message');

router.get('/', messages.getAllMessages);
router.get('/:id', messages.getMessagesById);
router.post('/', messages.addMessages);
router.put('/:id', messages.editMessages);
router.patch('/:id', messages.editMessages);
router.delete('/:id', messages.deleteMessages);
module.exports = router;
