const db = require('../Models/SallerModel');

const postdata = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            city,
            support,
            phoneNo,
            itemsale,
            companyname,
        } = req.body;

        const existing = await db.findOne({ email });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Email already exists in the database"
            });
        }

        const insertdata = await db.create(
            {
                firstname,
                lastname,
                email,
                city,
                support,
                phoneNo,
                itemsale,
                companyname,
            }
        );
        res.status(200).json(insertdata);
    } catch (error) {
        res.status(500).json(error.message)
    }
};

const getdata = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json(findalldata)
    } catch (error) {
        res.status(500).Json(error.message)
    }
}

const getsingle = async (req, res) => {
    try {
        const GetById = await db.findOne({ _id: req.params.id });
        res.status(200).json(GetById)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const deletedata = async (req, res) => {
    try {
        const DeleteById = await db.deleteOne({ _id: req.params.id });
        res.status(200).json(DeleteById)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const update = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            city,
            support,
            phoneNo,
            itemsale,
            companyname,
        } = req.body;
        const UpdateById = await db.updateMany(
            { _id: req.params.id },
            {
                $set: {
                    firstname,
                    lastname,
                    email,
                    city,
                    support,
                    phoneNo,
                    itemsale,
                    companyname,
                }
            }
        );
        res.status(200).json(UpdateById)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    update
}