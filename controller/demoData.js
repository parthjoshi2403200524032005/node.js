

const demoSchema = require('./demo.js')


const createDemoData = async function (req,res){
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
        age,
        isActive,
        
    })
  
    res.send({Message:"user created successfuly",demoData,success: true,})
} 


module.exports = createDemoData ;
