const review = require('../models/review');

module.exports.getAllReview = (req, res) => {
    review
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getReview = (req, res) => {
    review
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getReviewByProduct = (req, res) => {
    review
        .find({ productId: req.params.productId })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.addReview = (req, res) => {
    review.find().then(() => {
        const reviewNew = new review({ ...req.body });
        reviewNew
            .save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editReview = (req, res) => {
    review
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.editReviewbyProduct = (req, res) => {
    const { productId } = req.params;
    const updateData = req.body;

    review
        .findOne({ productId })
        .then((review) => {
            if (!review) {
                return res.status(404).json({ message: 'Review not found' });
            }

            review.reviewer = review.reviewer.map((reviewer) => {
                if (reviewer.userId === updateData.userId) {
                    return { ...reviewer, ...updateData };
                }
                return reviewer;
            });

            review.updatedAt = Date.now();
            return review.save();
        })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};
module.exports.deleteReview = (req, res) => {
    review
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
