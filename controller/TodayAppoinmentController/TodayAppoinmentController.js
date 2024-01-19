const TodayAppoinment = require("../../model/TodayAppoinmentModel/TodayAppoinmentModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");
// const cloudinaryUploadImg = require("../utils/cloudinary");
// const fs = require("fs");
let vendorCounter = 0; 
function generateVendorID() {
    vendorCounter++; // Increment the counter
    const formattedVendorID = `VED${vendorCounter.toString().padStart(4, '0')}`;
    return formattedVendorID;
}


const todayappoinment = async (req, resp) => {
    try {
        const time = {
            Date: Date.now()
        }
        const data = await TodayAppoinment({
            PatientId: req.body.PatientId,
            PatientName: req.body.PatientName,
            DoctorsName: req.body.DoctorsName,
            Description: req.body.Description,
            InvoiceId: generateVendorID(),
            DateTime: time.Date,
            Amount: req.body.Amount,
            BillStatus: req.body.BillStatus,
            DepositType: req.body.DepositType,
        })
        const result = await data.save();
        resp.send(result);
    } catch (error) {
        console.log("error", error);
        resp.status(404).json(`Error: ${error}`)
    }
}

const getdata = asyncHandler(async (req, resp) => {
    try {
        const data = await TodayAppoinment.find()
        resp.json(data);
    } catch (error) {
        resp.status(404).json(`Error: ${error.message}`)

    }
})

const deletedata = asyncHandler(async (req, resp) => {
    // validateMongoDbId(id);
    try {
        let result = await TodayAppoinment.deleteOne({ _id: req.params.id },
            {
                $set: req.body
            })
        resp.json(result);
    } catch (error) {

        resp.status(404).json(`Error: ${error.message}`)
    }
})

const getsingledata = asyncHandler(async (req, resp) => {
    try {
        let result = await TodayAppoinment.findOne({ _id: req.params.id })
        resp.json(result);
    } catch (error) {
        resp.status(404).json(`Error: ${error.message}`)
    }
})

const updatedata = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedData = await TodayAppoinment.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedData);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    todayappoinment,
    getdata,
    deletedata,
    updatedata,
    getsingledata
};



// {
//     "PatientId": 1,
//     "PatientName":"rahul",
//     "DoctorsName": "subham",
//     "Description": "jhgdajdg",
//     "Amount": 4000,
//     "BillStatus":"djgjghj",
//     "DepositType": "gjadbbjkhkj"
    
// }