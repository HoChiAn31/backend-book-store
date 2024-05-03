const conversation = require('../models/conversation');

module.exports.getAllConversation = (req, res) => {
    conversation
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getConversationById = (req, res) => {
    conversation
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addConversation = (req, res) => {
    conversation.find().then(() => {
        const Conversation = new conversation({ ...req.body });
        Conversation.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editConversation = (req, res) => {
    conversation
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteConversation = (req, res) => {
    conversation
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
