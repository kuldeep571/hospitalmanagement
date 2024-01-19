const mongoose = require("mongoose");
const AppoinmentSchema = mongoose.Schema({

   
    patients: {
        type: String,
        required: true,
    },
    visitCharges: {
        type: Number,
        required: true,
    },
    Doctors: {
        type: String,
        required: true,
    },
    Discount: {
        type: Number,
        required: true,
    },
    visitDescription:{
        type: String,
        required: true,
    },
    grandTotal:{
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
        default: new Date()
    },
    availableSlots: {
        type: String,
        required: true,
    },

},{timestamps: true})

module.exports = mongoose.model('appoinment', AppoinmentSchema);




// http://localhost:8080/api/appoinment/getdataDate

// {   
//     "patients": "company",
//     "visitCharges": 400,
//     "Doctors": "fgdfgh",
//     "Discount": 200,
//     "visitDescription":"12",
//     "availableSlots":"gdsjkk"
// }