// services/imageService.js
const { getStorage, ref, uploadBytesResumable, getDownloadURL } = require('firebase/storage');
const { signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../config/firebase.config');
const Product = require('../models/product');

// Function to upload images
const addProduct = async (file, quantity, productData) => {
    const storageFB = getStorage();

    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH);

    if (quantity === 'single') {
        const dateTime = Date.now();
        const fileName = `images/${dateTime}`;
        const storageRef = ref(storageFB, fileName);
        const metadata = {
            contentType: file.mimetype,
        };
        await uploadBytesResumable(storageRef, file.buffer, metadata);
        const imageUrl = await getDownloadURL(storageRef);
        const savedProduct = await Image.create({ imageUrl, ...productData });
        return { imageUrl: savedProduct.imageUrl, ...productData };
    }

    if (quantity === 'multiple' && file) {
        const image = [];
        for (let i = 0; i < file.length; i++) {
            const dateTime = Date.now();
            const fileName = `images/${dateTime}_${i}`;
            const storageRef = ref(storageFB, fileName);
            const metadata = {
                contentType: file[i].mimetype,
            };

            await uploadBytesResumable(storageRef, file[i].buffer, metadata);
            const imageUrl = await getDownloadURL(storageRef);
            image.push(imageUrl);
        }
        const savedProduct = await Product.create({
            name: productData.name,
            quantity: productData.quantity,
            categoryAllId: productData.categoryAllId,
            categoryDetailId: productData.categoryDetailId,
            categorySupplierId: productData.categorySupplierId,
            categoryPublishId: productData.categoryPublishId,
            categoryYearId: productData.categoryYearId,
            image: image, // Danh sách URL ảnh
            priceImport: productData.priceImport,
            priceSell: productData.priceSell,
            priceDiscount: productData.priceDiscount,
            author: productData.author,
            form: productData.form,
            language: productData.language,
            size: productData.size,
            pageQuantity: productData.pageQuantity,
            description: productData.description,
            rate: productData.rate,
            ratingPoint: productData.ratingPoint,
            numberOfVisit: productData.numberOfVisit,
        });
        return savedProduct;
    }
};

module.exports = {
    addProduct,
};
