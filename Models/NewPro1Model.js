const mongoose = require("mongoose");
const newproSchema = mongoose.Schema({

    image: {
        type: String,
    },
    video: {
        type: String,
    },
    image1: {
        type: String,
    },
    image2: {
        type: String,
    },
    image3: {
        type: String,
    },
    image4: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    brand: {
        type: String,
    },
    description: {
        type: String,
    },
    rating: {
        type: String,
    },
    category: {
        type: String,
    },
    cuttedprice: {
        type: String,
    },
    modelName: {
        type: String,
    },
    style: {
        type: String,
    },
    colour: {
        type: String,
    },
    screenSize: {
        type: String,
    },
    about_this_item: {
        type: String,
    },
    material: {
        type: String,
    },
    weight: {
        type: String,
    },
    product_dimensions: {
        type: String,
    },
    country_of_origin: {
        type: String,
    },
    special_feature: {
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('newpro1', newproSchema);