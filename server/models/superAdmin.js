// server/models/SuperAdmin.js
// This model represents Super Admin users who manage the entire system
// Yeh model Super Admin users ke liye hai jo system manage karte hain
const mongoose = require("mongoose");

const SuperAdminSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Remember to hash passwords in production
    role: { type: String, default: "superadmin" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuperAdmin", SuperAdminSchema);
