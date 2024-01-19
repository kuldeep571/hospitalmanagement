const mongoose = require("mongoose");

const CreateAppoinmentSchema = mongoose.Schema({


    Name:
    {
        type: String,
        required: true,
        unique: false
    },
    Email:
    {
        type: String,
        required: true,
        unique: true
    },
    Phone:
    {
        type: Number,
        required: true,
        unique: false
    },
    Address:
    {
        type: String,
        required: true,
        unique: false
    },
    Country:
    {
        type: String,
        required: true,
        unique: false
    },
    Date:
    {
        type: Date,
        required: true,
        unique: false
    },
    
},
{ timestamps: true }
);
module.exports = mongoose.model("modal", CreateAppoinmentSchema);
