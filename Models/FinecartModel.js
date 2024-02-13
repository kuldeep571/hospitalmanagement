const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({

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
    rating: {
        type: String,
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
    },
    memory_storage_capacity:{
        type: String,
    },
    ram_memory_installed_size:{
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('finecart', ProductSchema);