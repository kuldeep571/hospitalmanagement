const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();

const PORT = 5000;

const AddAppoinmentRouter = require("./router/AddAppoinmentRouter/AddAppoinmentRouter");
const CreateAppoinmentRouter = require("./router/CreateAppoinmentRouter/CreateAppoinmentRouter");
const ModalTitleRouter = require("./router/ModalTitleRouter/ModalTitleRouter");
const TodayAppoinmentRouter = require("./router/TodayAppoinmentRouter/TodayAppoinmentRouter");
const CalenderRouter = require("./router/CalenderRouter/CalenderRouter");
const incometax = require("./router/incometaxRouter");

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/api/appoinment", AddAppoinmentRouter);
app.use("/api/createappoinment", CreateAppoinmentRouter)
app.use("/api/modaltitle", ModalTitleRouter)
app.use("/api/todayappoinment", TodayAppoinmentRouter)
app.use("/api/calender", CalenderRouter)
app.use("/api/barcode", require('./router/userrouter'))


app.listen(PORT, () => {
  console.log(`Hritik bhai no Tention Your Server is running  at PORT ${PORT} 🦍🦍🦍`);
});
                             