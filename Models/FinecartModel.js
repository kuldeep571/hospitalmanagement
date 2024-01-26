const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({

    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
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
        rate: {
            type: Number,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        },
    },

}, { timestamps: true })

module.exports = mongoose.model('finecart', ProductSchema);