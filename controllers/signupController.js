const CryptoJS = require('crypto-js')
const User = require('../model/user.model')
const signuphandler = async(req,res)=>{
    try{
        const userObject={
            username:req.body.username,
            number:req.body.number,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password, "Ram").toString()//sabasiya when you take name of Ram u always sucseed
        }
        const newUser =new User(userObject);//User mould madhe object pathvla and return it in new user
        const savedUser = await newUser.save();//saving to database
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json({message:"error creating a user "})
    }
}

module.exports = signuphandler;