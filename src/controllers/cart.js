const cart = require('../models/cart');

module.exports.getAllCart = (req, res) => {
    cart.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCart = (req, res) => {
    cart.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCartByUserId = (req, res) => {
    const userId = req.params.userId;

    cart.find({ userId: userId })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
};
module.exports.addCart = (req, res) => {
    cart.find().then(() => {
        const Cart = new cart({ ...req.body });
        Cart.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editCart = (req, res) => {
    cart.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.editCartUser = (req, res) => {
    user.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.editCartByUserId = async (req, res) => {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    try {
        let cartData = await cart.findOne({ userId: userId });

        if (!cartData) {
            // Nếu giỏ hàng chưa tồn tại, tạo mới giỏ hàng với sản phẩm được chỉ định
            cartData = new cart({
                userId: userId,
                products: [{ productId: productId, quantity: quantity }],
            });
        } else {
            // Nếu giỏ hàng đã tồn tại
            const existingProductIndex = cartData.products.findIndex((product) => product.productId === productId);
            if (existingProductIndex !== -1) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
                cartData.products[existingProductIndex].quantity += quantity;
            } else {
                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới sản phẩm vào giỏ hàng
                cartData.products.push({ productId: productId, quantity: quantity });
            }
        }
        // Lưu hoặc cập nhật giỏ hàng
        const updatedCart = await cartData.save();
        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteCart = (req, res) => {
    cart.findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
