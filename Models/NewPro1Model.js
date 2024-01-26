const mongoose = require("mongoose");
const newproSchema = mongoose.Schema({

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
    cuttedprice: {
        type: Number,
        required: true,
    },

}, { timestamps: true })

module.exports = mongoose.model('newpro1', newproSchema);