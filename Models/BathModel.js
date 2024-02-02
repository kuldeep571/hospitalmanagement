const mongoose = require("mongoose");
const bathSchema = mongoose.Schema({

    image: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    video: {
        type: String,
    },
    image1: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: true,
    },
    image3: {
        type: String,
        required: true,
    },
    image4: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
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
        type: String,
        required: true,
    },
    colour:{
        type: String,
        required:true,
    },
    size:{
        type: String,
        required:true,
    },
    material:{
        type: String,
    },
    about_this_item:{
        type: String,
    }


}, { timestamps: true })

module.exports = mongoose.model('bath', bathSchema);