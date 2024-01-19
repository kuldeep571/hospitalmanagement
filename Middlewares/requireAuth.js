const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const userModel = require("../Models/userModel");
const AdminModel = require("../Models/AdminModel");

const requireAuth = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        let finalUser;
        // const user = await userModel.findById(decoded?.id);
        // if (!user) {
        //   finalUser = await AdminModel.findById(decoded?.id);
        // } else {
        //   finalUser = user;
        // }
        req.user = decoded;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorized token expired, Please Login again");
    }
  } else {
    throw new Error(" There is no token attached to header");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
});

module.exports = { requireAuth, isAdmin };
