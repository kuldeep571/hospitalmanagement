const mongoose = require("mongoose");
const validator = require('validator');
const RegistrationSchema = mongoose.Schema({

    fullname: {
        type: String,
        required: true,
    },
    contactNo: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        // validate: {
        //     validator: validator.isEmail,
        //     message: 'Invalid email format',
        // },
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    dateOfBirth:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    languageSpoken: {
        type: String,
        required: true,
    },
    hospitalName: {
        type: String,
        required: true,
    },
    workExperience:{
        type: Number,
        required: true,
    },
    boardCertifications: {
        type: String,
        required: true,
    },
    stateLicense: {
        type: String,
        required: true,
    },
    speciality:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    Website:{
        type: String,
        required: true,
    }

},{timestamps: true})

module.exports = mongoose.model('registration', RegistrationSchema);


// http://localhost:8080/api/registration/

// fullname:raj yadav
// contactNo:98989898
// email:raj@gmail.com
// permanentAddress:200 b
// dateOfBirth:22
// gender:mail
// languageSpoken:hindi
// hospitalName:aarihant
// workExperience:2
// boardCertifications:hjgdasg
// stateLicense:klhhdksa
// speciality:hjgsad
// //image:
// Website:djkagskdgasjk