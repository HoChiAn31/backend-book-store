const categoryAll = require('../models/categoryAll');

module.exports.getAllCategoryAll = (req, res) => {
    categoryAll
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategoryAll = (req, res) => {
    categoryAll
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addCategoryAll = (req, res) => {
    categoryAll.find().then(() => {
        const CategoryAll = new categoryAll({ ...req.body });
        CategoryAll.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editCategoryAll = (req, res) => {
    categoryAll
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteCategoryAll = (req, res) => {
    categoryAll
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
