const mongoose = require('mongoose');
const schema = mongoose.Schema;

const conversationSchema = new mongoose.Schema({
    participant1Id: {
        required: true,
        type: schema.Types.String,
        ref: 'user',
    },
    participant2Id: {
        required: true,
        type: schema.Types.String,
        ref: 'user',
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

module.exports = mongoose.model('conversation', conversationSchema);
