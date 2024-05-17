const payment = require('../models/payment');

module.exports.getAllPayment = (req, res) => {
    payment
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getPayment = (req, res) => {
    payment
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getPaymentByUserId = (req, res) => {
    payment
        .find({ userId: req.params.userId })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.addPayment = (req, res) => {
    payment.find().then(() => {
        const newPayments = new payment({ ...req.body });
        newPayments
            .save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editPayment = (req, res) => {
    payment
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.editPaymentUser = (req, res) => {
    user.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deletePayment = (req, res) => {
    payment
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
