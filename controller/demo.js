const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  firstName: {
    type: mongoose.Schema.Types.String,
  },
  lastName: {
    type: mongoose.Schema.Types.String,
  },
  email: {
    type: mongoose.Schema.Types.String,
  },
});

module.exports = new mongoose.model("Demo", demoSchema);
