

const demoSchema = require('./demo.js')

const createDemoData = async function (req,res){
    const demoData = await demoSchema.create({
        firstName:"parth",
        lastName:"Joshi",
    })
    res.send({Message:"user created successfuly",demoData})
}


module.exports = createDemoData ;