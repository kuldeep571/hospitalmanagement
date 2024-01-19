const mongoose = require("mongoose");

const CreateAppoinmentSchema = mongoose.Schema({

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
    Doctors:
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
    DateTime:
    {
        type: Date,
        required: true,
        unique: false
    },
    Remark:
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
    Status:
    {
        type: String,
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
    }
},
{ timestamps: true }
);
module.exports = mongoose.model("createappoinments", CreateAppoinmentSchema);
