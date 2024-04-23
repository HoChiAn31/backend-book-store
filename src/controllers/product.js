const product = require('../models/product');

module.exports.getAllProduct = (req, res) => {
    product
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getProduct = (req, res) => {
    product
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addProduct = (req, res) => {
    product.find().then(() => {
        const productNew = new product({ ...req.body });
        productNew.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editProduct = (req, res) => {
    product
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteProduct = (req, res) => {
    product
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
