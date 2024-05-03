const messages = require('../models/message');

module.exports.getAllMessages = (req, res) => {
    messages
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getMessagesById = (req, res) => {
    messages
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addMessages = (req, res) => {
    messages.find().then(() => {
        const Messages = new messages({ ...req.body });
        Messages.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editMessages = (req, res) => {
    messages
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteMessages = (req, res) => {
    messages
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
