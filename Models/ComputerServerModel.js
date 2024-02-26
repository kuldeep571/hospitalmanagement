const mongoose = require("mongoose");
const computerserverSchema = mongoose.Schema({

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
    rating:{
        type: String,
    },
    category: {
        type: String,
    },
    cuttedprice: {
        type: String,
    },
    itemWeight:{
        type: String,
    },
    compatibleDevices:{
        type: String,
    },
    modelName:{
        type: String,
    },
    powerSupply:{
        type: String,
    },
    warranty:{
        type: String,
    },
    processor:{
        type: String,
    },
    hardDrive:{
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

module.exports = mongoose.model('computerserver', computerserverSchema);