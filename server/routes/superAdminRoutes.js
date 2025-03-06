// server/routes/superAdminRoutes.js
// API endpoints for Super Admin operations
// Yeh file Super Admin ke liye API endpoints define karti hai
const express = require("express");
const router = express.Router();
const superAdminController = require("../controllers/superAdminController");

// Route to register a new Super Admin
router.post("/register", superAdminController.registerSuperAdmin);
// Route for Super Admin login
router.post("/login", superAdminController.loginSuperAdmin);

module.exports = router;
