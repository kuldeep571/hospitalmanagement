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

app.use("/api/bikeandscooty", require("./Routers/BikeAndScootyRouter"));

app.use("/api/games", require("./Routers/GamesRouter"));

app.use("/api/bad", require("./Routers/BadRouter"));

app.use("/api/software", require("./Routers/SoftwareRouter"));

app.use("/api/music", require("./Routers/MusicRouter"));

app.use("/api/bath", require("./Routers/BathRouter"));

app.use("/api/superadmin", require("./Routers/SuperAbminRouter"));

app.use("/api/musicscooters", require("./Routers/MusicScootersRouter"));

app.use("/api/coumputerserver", require("./Routers/ComputerServerRouter"));

app.use("/api/hardware", require("./Routers/HardwareRouter"));

app.use("/api/personalcomputer", require("./Routers/PersonalComputerRouter"));

app.use("/api/ProfessionalAudioBrand", require("./Routers/ProfessionalAudioBrandsRouter"));


app.listen(PORT, () => {
  console.log(`Hospital Server is running  at PORT ${PORT}`);
});
