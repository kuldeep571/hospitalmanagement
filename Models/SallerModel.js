const mongoose = require('mongoose');
const sallerSchema = mongoose.Schema({

    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },
    support: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    itemsale: {
        type: String,
    },
    companyname: {
        type: String,
    },

}, { timestamps: true })

module.exports = mongoose.model('saller', sallerSchema);