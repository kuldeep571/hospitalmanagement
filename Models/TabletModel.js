const mongoose = require("mongoose");
const tabletSchema = mongoose.Schema({

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
    category: {
        type: String,
    },
    cuttedprice: {
        type: String,
    },
    modelName:{
        type: String,
    },
    rating:{
        type: String,
    },
    style:{
        type: String,
    },
    colour:{
        type: String,
    },
    screenSize:{
        type: String,
    },
    about_this_item:{
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('tablet', tabletSchema);