const favorite = require('../models/favorite');

module.exports.getAllFavorite = (req, res) => {
    favorite
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getFavorite = (req, res) => {
    favorite
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getFavoriteByUserId = (req, res) => {
    const userId = req.params.userId;

    favorite
        .find({ userId: userId })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
};
module.exports.addFavorite = (req, res) => {
    favorite.find().then(() => {
        const Favorite = new favorite({ ...req.body });
        Favorite.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};

module.exports.editFavoritesByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const { productId } = req.body;

        if (!Array.isArray(productId) || productId.length === 0) {
            return res.status(400).json({ message: 'productId should be a non-empty array' });
        }

        // Find the document by userId
        const Favorite = await favorite.findOne({ userId });

        if (!Favorite) {
            return res.status(404).json({ message: 'Favorite not found' });
        }

        // Update productId array
        productId.forEach((id) => {
            const productIndex = Favorite.productId.indexOf(id);

            if (productIndex > -1) {
                // Remove productId if it exists
                Favorite.productId.splice(productIndex, 1);
            } else {
                // Add productId if it does not exist
                Favorite.productId.push(id);
            }
        });

        // Save the updated document
        const updatedFavorite = await Favorite.save();

        res.status(200).json(updatedFavorite);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
module.exports.editFavorite = (req, res) => {
    favorite
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};

module.exports.deleteFavorite = (req, res) => {
    favorite
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
