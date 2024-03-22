const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        console.log("trying DB connection")
        await mongoose.connect(process.env.mongo_URL, {
            
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;