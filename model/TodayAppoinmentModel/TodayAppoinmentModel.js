const mongoose = require("mongoose");

const TodayAppoinmentSchema = mongoose.Schema({

    PatientId: {
        type: Number,
        required: true,
        unique: false
    },
    PatientName:
    {
        type: String,
        required: true,
        unique: false
    },
    DoctorsName:
    {
        type: String,
        required: true,
        unique: false
    },
    Description:
    {
        type: String,
        required: true,
        unique: false
    },
    InvoiceId:
    {
        type: String,
        required: true,
        unique: false
    },
    DateTime:
    {
        type: Date,
        required: true,
        unique: false
    },
    Amount:
    {
        type: Number,
        required: true,
        unique: false
    },
    BillStatus:
    {
        type:String,
        require: true,
        unique: false
    },
    DepositType:
    {
        type: String,
        required: true,
        unique: false
    },
},
{ timestamps: true }
);
module.exports = mongoose.model("todayappoinment", TodayAppoinmentSchema);
