const product = require('../models/product');
const { addProduct } = require('../services/Product');
module.exports.getAllProduct = (req, res) => {
    const categoryId = req.query.categoryId;

    let query = {};

    if (categoryId) {
        query.categoryAllId = categoryId;
    }

    product
        .find(query)
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

module.exports.addProduct = async (req, res) => {
    const {
        name,
        quantity,
        categoryAllId,
        categoryDetailId,
        categorySupplierId,
        categoryPublishId,
        categoryYearId,
        image,
        priceImport,
        priceSell,
        priceDiscount,
        author,
        form,
        language,
        size,
        pageQuantity,
        description,
        rate,
        ratingPoint,
        numberOfVisit,
    } = req.body;
    const userData = {
        name,
        quantity,
        categoryAllId,
        categoryDetailId,
        categorySupplierId,
        categoryPublishId,
        categoryYearId,
        image,
        priceImport,
        priceSell,
        priceDiscount,
        author,
        form,
        language,
        size,
        pageQuantity,
        description,
        rate,
        ratingPoint,
        numberOfVisit,
    };
    try {
        const uploadedImages = await addProduct(req.files, 'multiple', userData);
        // const uploadedImages = await addProduct(userData.image, 'multiple', userData);
        res.send({
            uploadedImages,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: 'FAILED', error: err.message });
    }
};
// module.exports = {
//     uploadMultipleProduct,
// };

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
