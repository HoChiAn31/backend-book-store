const categoryYear = require('../models/categoryYear');

module.exports.getAllCategoryYear = (req, res) => {
    categoryYear
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategoryYear = (req, res) => {
    categoryYear
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addCategoryYear = (req, res) => {
    categoryYear.find().then(() => {
        const CategoryYear = new categoryYear({ ...req.body });
        CategoryYear.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editCategoryYear = (req, res) => {
    categoryYear
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteCategoryYear = (req, res) => {
    categoryYear
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
