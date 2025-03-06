// server/controllers/superAdminController.js
// Controller for handling Super Admin operations
// Yeh controller Super Admin module ke liye backend logic handle karta hai
const SuperAdmin = require("../models/SuperAdmin");
const bcrypt = require("bcrypt");

// Register a new Super Admin
exports.registerSuperAdmin = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    // Hash password for security
    const hashedPassword = await bcrypt.hash(password, 10);
    const superAdmin = new SuperAdmin({
      fullName,
      email,
      password: hashedPassword,
    });
    await superAdmin.save();
    res.status(201).json({ message: "Super Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

// Super Admin login
exports.loginSuperAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const superAdmin = await SuperAdmin.findOne({ email });
    if (!superAdmin) {
      return res.status(404).json({ error: "Super Admin not found" });
    }
    const isMatch = await bcrypt.compare(password, superAdmin.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
