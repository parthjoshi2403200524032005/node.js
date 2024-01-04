const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  firstName: {
    type: mongoose.Schema.Types.String,
  
    uppercase: true,
  },
  lastName: {
    type: mongoose.Schema.Types.String,
    
  },
  email: {
    type: mongoose.Schema.Types.String,
   
    unique: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
  },
  address: {
    type: mongoose.Schema.Types.String,
  },
  mobileNumber: {
    type: mongoose.Schema.Types.Number,
  
    unique: true,
  },
  age: {
    type: mongoose.Schema.Types.Number,
  },
  isActive: {
    type: mongoose.Schema.Types.Boolean,
  },
});

module.exports = new mongoose.model("Demo", demoSchema);
