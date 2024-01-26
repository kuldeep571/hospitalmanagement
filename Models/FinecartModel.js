const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({

    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },

}, { timestamps: true })

module.exports = mongoose.model('finecart', ProductSchema);