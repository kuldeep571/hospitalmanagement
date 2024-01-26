const express = require("express");
const dbConnect = require("./Config/db");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/registration", require("./Routers/DoctorRegistrationRouter"));

app.use("/api/doctor", require("./Routers/AddDoctorsRouter"));

app.use("/api/appoinment", require("./Routers/AddAppoinmentRouter"));

app.use("/api/departments", require("./Routers/departmentsRouter"));

app.use("/api/products", require("./Routers/ProductsRouter"));

app.use("/api/finecart", require("./Routers/FinecartRouter"));


app.listen(PORT, () => {
  console.log(`Hospital Server is running  at PORT ${PORT}`);
});
