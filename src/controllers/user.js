const user = require('../models/user');

module.exports.getAllUser = (req, res) => {
    user.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getUser = (req, res) => {
    user.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addUser = (req, res) => {
    user.find().then(() => {
        const User = new user({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        User.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editUser = (req, res) => {
    user.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteUser = (req, res) => {
    user.findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
