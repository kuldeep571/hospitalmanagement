const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({

    image: {
        type: String,
    },
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    brand: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    rating: {
        rate: {
            type: String,
        },
        count: {
            type: String,
        },
    },

}, { timestamps: true })

module.exports = mongoose.model('product', ProductSchema);