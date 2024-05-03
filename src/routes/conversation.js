const express = require('express');
const router = express.Router();
const conversation = require('../controllers/conversation');

router.get('/', conversation.getAllConversation);
router.get('/:id', conversation.getConversationById);
router.post('/', conversation.addConversation);
router.put('/:id', conversation.editConversation);
router.patch('/:id', conversation.editConversation);
router.delete('/:id', conversation.deleteConversation);
module.exports = router;
