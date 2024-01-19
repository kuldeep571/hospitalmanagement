const CreateAppoinment = require("../../model/CreateAppoinmentModel/CreateAppoinmentModel");
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


const createappoinment = async (req, resp) => {
    try {
        const time = {
            Date: Date.now()
        }
        const data = await CreateAppoinment({
            PatientId: req.body.PatientId,
            PatientName: req.body.PatientName,
            Doctors: req.body.Doctors,
            Description: req.body.Description,
            DateTime: time.Date,
            Remark: req.body.Remark,
            InvoiceId: generateVendorID(),
            Status: req.body.Status,
            Amount: req.body.Amount,
            BillStatus: req.body.BillStatus,
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
        const data = await CreateAppoinment.find()
        resp.json(data);
    } catch (error) {
        resp.status(404).json(`Error: ${error.message}`)

    }
})

const deletedata = asyncHandler(async (req, resp) => {
    // validateMongoDbId(id);
    try {
        let result = await CreateAppoinment.deleteOne({ _id: req.params.id },
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
        let result = await CreateAppoinment.findOne({ _id: req.params.id })
        resp.json(result);
    } catch (error) {
        resp.status(404).json(`Error: ${error.message}`)
    }
})

const updatedata = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedData = await CreateAppoinment.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedData);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createappoinment,
    getdata,
    deletedata,
    updatedata,
    getsingledata
};



// {
//     "PatientId": 1,
//     "PatientName":"rahul",
//     "Doctors": "subham",
//     "Description": "jhgdajdg",
//     "Remark": "uiyi",
//     "Status":"true",
//     "Amount": 2133,
//     "BillStatus": "true"
    
// }