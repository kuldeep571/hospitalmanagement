const mongoose = require("mongoose");
const newproSchema = mongoose.Schema({

    image: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
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
    processor_brand:{
        type: String,
    },
    processor_type:{
        type: String,
    },
    processor_speed:{
        type: String,
    },
    processor_count:{
        type: String,
    },
    ram_size:{
        type: String,
    },
    memory_technology:{
        type: String,
    },
    maximum_memory_supported:{
        type: String,
    },
    graphics_chipset_brand:{
        type: String,
    },
    graphics_card_description:{
        type: String,
    },
    graphics_ram_type:{
        type: String,
    },
    graphics_card_interface:{
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('newpro2', newproSchema);