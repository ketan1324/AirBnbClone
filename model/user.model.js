const mongoose = require('mongoose');//imported mongoose

const UserSchema = new mongoose.Schema({
    username:{type: String, required: true,uniquie:true},
    number:{type: String, required: true},
    email: { type: String, required: true,uniquie:true },
    password:{type:String,required:true}
   
    
},
{
    timestamps:true
})

const User = mongoose.model("User", UserSchema);
module.exports = User;