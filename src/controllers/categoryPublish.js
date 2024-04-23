const categoryPublish = require('../models/categoryPublish');

module.exports.getAllCategoryPublish = (req, res) => {
    categoryPublish
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategoryPublish = (req, res) => {
    categoryPublish
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addCategoryPublish = (req, res) => {
    categoryPublish.find().then(() => {
        const CategoryPublish = new categoryPublish({ ...req.body });
        CategoryPublish.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editCategoryPublish = (req, res) => {
    categoryPublish
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteCategoryPublish = (req, res) => {
    categoryPublish
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
