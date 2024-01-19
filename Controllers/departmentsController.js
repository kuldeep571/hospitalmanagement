const db = require("../Models/departmentsModel");

const postdata = async (req, res) => {
    try {
        const {
            name,
            details
        } = req.body

        const img = req.uploadedImageUrl
        const count = await db.countDocuments();
        const generatedID = `${(count + 1).toString().padStart(4, '0')}`;
        const insertdata = await db.create(
            {
                name,
                details,
                S_No: `SERIAL${generatedID}`,
                image: img,
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
            message: "Get All Department Data",
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
            message: "Get Single Department Data"
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
            message: "Delete Department Data Success"
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
        details 
    } = req.body;
     let data= await db.updateMany(
        { _id: req.params.id },
        {
          $set: {
            name,
            details,
            image: uploadedImages,
          },
        }
      );
      res.status(200).json(data);
    } catch (error) {
      res.status(404).send(error.message);
    }
  };

module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    Putdata
}