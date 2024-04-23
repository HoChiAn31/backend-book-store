const categorySupplier = require('../models/categorySupplier');

module.exports.getAllCategorySupplier = (req, res) => {
    categorySupplier
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategorySupplier = (req, res) => {
    categorySupplier
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addCategorySupplier = (req, res) => {
    categorySupplier.find().then(() => {
        const CategorySupplier = new categorySupplier({ ...req.body });
        CategorySupplier.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editCategorySupplier = (req, res) => {
    categorySupplier
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteCategorySupplier = (req, res) => {
    categorySupplier
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
