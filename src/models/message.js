const mongoose = require('mongoose');
const schema = mongoose.Schema;

const messagesSchema = new mongoose.Schema({
    conversationId: {
        required: true,
        type: schema.Types.String,
        ref: 'conversation',
    },
    senderId: {
        required: true,
        type: schema.Types.String,
        ref: 'user',
    },
    content: {
        required: true,
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('messages', messagesSchema);
