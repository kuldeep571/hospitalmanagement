const mongoose = require("mongoose");
const validator = require('validator');
const DoctrosSchema = mongoose.Schema({

    image:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format',
        },
    },
    mobile: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    fees:{
        type: String,
        required: true,
    },
    qualification:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },

},{timestamps: true})

module.exports = mongoose.model('doctors', DoctrosSchema);

// http://localhost:8080/api/doctor/

// name:DR Chohan
// email:BSChohan@gmail.com
// mobile:9898989898
// department:gfdg
// location:fgddf
// fees:12fdgdf
// qualification:12dfgfd
// address:12gdfg
// about:jkdsgdf