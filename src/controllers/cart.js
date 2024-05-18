const cart = require('../models/cart');

module.exports.getAllCart = (req, res) => {
    cart.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCart = (req, res) => {
    cart.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCartByUserId = (req, res) => {
    const userId = req.query.userId;

    cart.find({ userId: userId })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Internal server error" });
        });
};
module.exports.addCart = (req, res) => {
    cart.find().then(() => {
        const Cart = new cart({ ...req.body });
        Cart.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editCart = (req, res) => {
    cart.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.editCartUser = (req, res) => {
    user.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.editCartByUserId = (req, res) => {
    const userId = req.query.userId;

    cart.findOneAndUpdate({ userId: userId }, req.body, { new: true })
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Cart not found" });
            }
            res.json(data);
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

module.exports.deleteCart = (req, res) => {
    cart.findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
