const mongoose = require("mongoose");
const MusicSchema = mongoose.Schema({

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
    watt: {
        type: String,
    },
    colour: {
        type: String,
    },
    material: {
        type: String,
    },
    skillLevel: {
        type: String,
    },
    specialFeature: {
        type: String,
    },
    about_this_item: {
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('music', MusicSchema);