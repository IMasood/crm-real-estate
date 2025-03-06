// server/routes/authRoutes.js
// Routes for unified authentication (login)
// Yeh file sab users ke login endpoint ko define karti hai
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Unified login endpoint for all roles
router.post("/login", authController.login);

module.exports = router;
