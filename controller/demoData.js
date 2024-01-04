

const demoSchema = require('./demo.js')


const createDemoData = async function (req,res){
    const demoData = await demoSchema.create({
        firstName:"parth",
        lastName:"joshi",
        email:"parthjohi009@gmail.com",
        PhoneNumber:"7889264260"
    })
    // const {firstName,lastName} = req.body
    res.send({Message:"user created successfuly",demoData})
}


module.exports = createDemoData ;
