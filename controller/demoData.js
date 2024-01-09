const { default: mongoose } = require("mongoose");
const demoSchema = require("./demo.js");
const { ObjectId } = require("mongoose").Types;

const createDemoData = async function (req, res) {
  const {
    firstName,
    lastName,
    email,
    password,
    address,
    mobileNumber,
    age,
    isActive,
  } = req.body;

  // if (!email) {
  //   return res.send({ message: "Please enter email" });
  // }

  // if (!mobileNumber) {
  //   return res.send({ message: "Please enter mobile number" });
  // }

  const demoData = await demoSchema.create({
    firstName,
    lastName,
    email,
    mobileNumber,
    address,
    password,
    age: 24,
    isActive,
  });

  res.send({ Message: "user created successfuly", success: true, demoData });
};
const findAllUsers = async function (req, res) {
//   const { age } = req.query;
//   const { id } = req.params;
//   console.log("id", id);
//   const findData = await demoSchema.find({ _id: id });
//   console.log("findData11111", findData);

//   res.send({ message: "User get successfully" });
};

const getSingleUser = async (req, res) => {
  // const { emailaaaaa } = req.query
  const {id} = req.params
  console.log("id",id)
  // const { age } = req.query
  const data = await demoSchema.find({ _id:ObjectId(id) })
  if (!data) {
      return res.send({ message: "email not found" })
  }
  res.send({ message: "data fetch successfully", data })
};

// module.exports = createDemoData
// module.exports = findAllUsers

module.exports = { createDemoData, getSingleUser, findAllUsers };
