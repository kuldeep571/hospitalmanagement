const db = require('../model/usermodel');

const addpro = async (req, res) => {
    try {
        const { name, email, contactNO, empNo } = req.body;

        const addData = await db.create({
            name,
            email,
            contactNO,
            empNo
        });

        res.status(200).json({ addData, message: "Created successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};


const getpro = async(req, res)=>{
    const finddata = await db.find();
    res.status(200).json(finddata)
}

module.exports ={addpro, getpro};