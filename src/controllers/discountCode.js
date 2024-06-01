const discountCode = require('../models/discountCode');

module.exports.getAllDiscountCode = (req, res) => {
    discountCode
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getDiscountCode = (req, res) => {
    discountCode
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addDiscountCode = (req, res) => {
    discountCode.find().then(() => {
        const DiscountCode = new discountCode({ ...req.body });
        DiscountCode.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editDiscountCode = (req, res) => {
    discountCode
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteDiscountCode = (req, res) => {
    discountCode
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
