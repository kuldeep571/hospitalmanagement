const { default: mongoose } = require("mongoose");

const databasename = "hospital"

const dbConnect = () => {
  try {
    // const conn = mongoose.connect(`mongodb://127.0.0.1:27017/${databasename}`);
    const conn = mongoose.connect(process.env.mongourl);
    console.log("bro Database Connected Successfully ✈️🚀✈️🚀");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
