// server/models/User.js
// Unified User model for multi-tenancy and RBAC
// Yeh model sab users ke liye hai: superadmin, admin, sales, watchman, maintenance, tenant, etc.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Ensure to hash passwords in production
    role: { type: String, default: "tenant" }, // Roles: superadmin, admin, sales, etc.
    realEstateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RealEstate",
      default: null,
    },
    // Additional fields for multi-tenancy and other info can be added here
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
