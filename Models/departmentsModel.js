const mongoose = require("mongoose");
const DepartmentsSchema = mongoose.Schema({

    S_No:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },

},{timestamps: true})

module.exports = mongoose.model('departments', DepartmentsSchema);