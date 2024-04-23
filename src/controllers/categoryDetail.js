const categoryDetail = require('../models/categoryDetail');

module.exports.getAllCategoryDetail = (req, res) => {
    categoryDetail
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategoryDetail = (req, res) => {
    categoryDetail
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addCategoryDetail = (req, res) => {
    categoryDetail.find().then(() => {
        const CategoryDetail = new categoryDetail({ ...req.body });
        CategoryDetail.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editCategoryDetail = (req, res) => {
    categoryDetail
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteCategoryDetail = (req, res) => {
    categoryDetail
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
