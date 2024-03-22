const CryptoJS = require('crypto-js')
const User = require('../model/user.model')
const jwt = require('jsonwebtoken');

const loginController = async(req,res)=>{
        
    try{
        const user = await User.findOne({ number: req.body.number });
        !user && res.status(401).json({ message: "Incorrect Mobile Number" });
        console.log("user numbher is: ",user.number);
        console.log("user password is ",user.password);
        console.log("req.body.number: ",req.body.number);
        console.log("req.body.password: ",req.body.password);

        let decodedPassword = CryptoJS.AES.decrypt(user.password, "Ram").toString(CryptoJS.enc.Utf8);
        console.log("decoded password is: ",decodedPassword)
        decodedPassword !== req.body.password && res.status(401).json({ message: "Incorrect Password"});
        const { password, ...rest } = user._doc;
        const accessToken = jwt.sign( {username: user.username},"Ram" )//Ram ji ki nikli savali Ram ji leela hei nyaaari 

        res.json({...rest, accessToken});

    }catch(err){
        console.log(err)
    }
}

module.exports =loginController;