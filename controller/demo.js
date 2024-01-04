const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  firstName: {
    type: mongoose.Schema.Types.String,
    required: true,
    uppercase: true,
  },
  lastName: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  PhoneNumber: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
});

module.exports = new mongoose.model("Demo", demoSchema);
