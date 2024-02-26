const mongoose = require("mongoose");
const SoftwareSchema = mongoose.Schema({

    image: {
        type: String,
    },
    rating: {
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
    colour:{
        type: String,
    },
    screenSize:{
        type: String,
    },
    about_this_item:{
        type: String,
    },
    product_dimensions:{
        type: String,
    },
    item_model_number:{
        type: String,
    },
    manufacturer:{
        type: String,
    },
    asin:{
        type: String,
    },
    date_first_available:{
        type: String,
    },
    item_weight:{
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('software', SoftwareSchema);