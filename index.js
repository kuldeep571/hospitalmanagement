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

app.use("/api/newpro", require("./Routers/NewProRouter"));

app.use("/api/newpro1", require("./Routers/NewPro1Router"));

app.use("/api/newpro2", require("./Routers/NewPro2Router"));

app.use("/api/newpro3", require("./Routers/NewPro3Router"));

app.use("/api/newpro4", require("./Routers/NewPro4Router"));

app.use("/api/cartitem", require("./Routers/CartItemRouter"));

app.use("/api/badandbath", require("./Routers/BadAndBathRouter"));

app.use("/api/tablet", require("./Routers/TabletRouter"));

app.use("/api/drone", require("./Routers/DroneRouter"));

app.use("/api/cloth", require("./Routers/ClothingRouter"));

app.use("/api/bikeandcloth", require("./Routers/BikeAndScootyRouter"));


app.listen(PORT, () => {
  console.log(`Hospital Server is running  at PORT ${PORT}`);
});
