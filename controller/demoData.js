

const demoSchema = require('./demo.js')


const createDemoData = async function (req,res){
    const demoData = await demoSchema.create({
        firstName:"parth",
        lastName:"Joshi",
    })
    // const {firstName,lastName} = req.body
    res.send({Message:"user created successfuly",demoData})
}


module.exports = createDemoData ;
