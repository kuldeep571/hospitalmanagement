const mongoose = require("mongoose");
const newproSchema = mongoose.Schema({

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
    processor_brand: {
        type: String,
    },
    processor_type: {
        type: String,
    },
    processor_speed: {
        type: String,
    },
    processor_count: {
        type: String,
    },
    ram_size: {
        type: String,
    },
    memory_technology: {
        type: String,
    },
    maximum_memory_supported: {
        type: String,
    },
    graphics_chipset_brand: {
        type: String,
    },
    graphics_card_description: {
        type: String,
    },
    graphics_ram_type: {
        type: String,
    },
    graphics_card_interface: {
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('newpro2', newproSchema);