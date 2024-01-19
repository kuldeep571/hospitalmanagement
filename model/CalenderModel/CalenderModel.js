const mongoose = require("mongoose");

const CalenderSchema = mongoose.Schema({
    Date:
    {
        type: String,
        required: true,
        unique: false
    },
},
{ timestamps: true }
);
module.exports = mongoose.model("calender", CalenderSchema);
