const mongoose = require("mongoose");

const AppoinmentSchema = mongoose.Schema({

    userdata: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "createappoinments"
    },
    Patients: {
        type: String,
        required: true,
        unique: false
    },
    VisitCharges:
    {
        type: Number,
        required: true,
        unique: false
    },
    Doctors:
    {
        type: String,
        required: true,
        unique: false
    },
    Discount:
    {
        type: Number,
        required: true,
        unique: true
    },
    VisitDiscription:
    {
        type: String,
        required: true,
        unique: false
    },
    GrandTotal:
    {
        type: Number,
        required: true,
        unique: false
    },
    Date:
    {
        type: Date,
        required: true,
        unique: false
    },
    AvailableSlots:
    {
        type: String,
        required: true,
        unique: false
    },
},
{ timestamps: true }
);
module.exports = mongoose.model("appoinment", AppoinmentSchema);
