const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    create_at: Date
});

const Products = mongoose.model('Products', productsSchema);
module.exports = Products;