const mongoose = require('mongoose');
const dataSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        contactNO: {
            type: String,
            required: true,
        },
        empNo: {
            type: String,
        },
    }, {
    timestamps: true,
});

module.exports = mongoose.model('Barcode', dataSchema);
