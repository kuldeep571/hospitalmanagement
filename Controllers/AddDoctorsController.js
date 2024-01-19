const db = require("../Models/AddDoctorsModel");

const postdata = async (req, res) => {
    try {
        const {
            name,
            email,
            mobile,
            department,
            location,
            fees,
            qualification,
            address,
            about,
            status
        } = req.body

        const existing = await db.findOne({ email });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Email already exists in the database"
            });
        }
        const img = req.uploadedImageUrl
        const insertdata = await db.create(
            {
                name,
                email,
                mobile,
                department,
                location,
                fees,
                qualification,
                address,
                about,
                status,
                image: img,
                // ...req.body
            }
        );
        res.status(200).json(insertdata);
    } catch (error) {
        res.status(500).json(error)
    }
};

const getdata = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json({
            success: true,
            findalldata,
            message: "Get All Doctors Data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


const getsingle = async (req, res) => {
    try {
        const findsingle = await db.findOne({ _id: req.params.id })
        res.status(200).json({
            success: true,
            findsingle,
            message: "Get Single Doctors Data"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


const deletedata = async (req, res) => {
    try {
        const deletedata = await db.deleteOne({ _id: req.params.id })
        res.status(200).json({
            success: true,
            deletedata,
            message: "Delete Doctors Data Success"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const Putdata = async (req, res) => {
    try {
        const uploadedImages = req.uploadedImageUrl;
        const {
            name,
            email,
            mobile,
            department,
            location,
            fees,
            qualification,
            address,
            about,
            status
        } = req.body;
        let data = await db.updateMany(
            { _id: req.params.id },
            {
                $set: {
                    name,
                    email,
                    mobile,
                    department,
                    location,
                    fees,
                    qualification,
                    address,
                    about,
                    status,
                    image: uploadedImages,
                },
            }
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const active = async (req, res) => {
    try {
        const findalldata = await db.find({status: true});
        res.status(200).json({
            success: true,
            findalldata,
            message: "Get All Doctors Data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const inactive = async (req, res) => {
    try {
        const findalldata = await db.find({status: false});
        res.status(200).json({
            success: true,
            findalldata,
            message: "Get All Doctors Data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    Putdata,
    active,
    inactive
}