const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({

    image: {
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
    rating: {
        type: String,
        required: true,
    },
    modelName:{
        type: String,
        required:true,
    },
    style:{
        type: String,
        required:true,
    },
    colour:{
        type: String,
        required:true,
    },
    screenSize:{
        type: String,
        required:true,
    },
    about_this_item:{
        type: String,
    },
    manufacturer:{
        type: String,
    },
    asin:{
        type: String,
    },
    voltage:{
        type: String,
    },
    item_weight:{
        type: String,
    },
    special_feature:{
        type: String,
    },
    speaker_type:{
        type: String,
    },
    wattage:{
        type: String,
    },
    standing_screen_display_size:{
        type: String,
    },
    aspect_ratio:{
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('finecart', ProductSchema);