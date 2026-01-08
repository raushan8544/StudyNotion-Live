const express = require("express");
const router = express.Router();

// Import controllers using correct names (must match Auth.js)
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/Auth");

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

const { auth } = require("../middlewares/auth");

// Authentication routes
router.post("/login",  login);
router.post("/signup",  signup);
router.post("/sendotp", sendotp);
router.post("/changepassword", auth, changePassword);

// Reset password routes
router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);

module.exports = router;
