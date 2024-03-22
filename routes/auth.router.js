const express = require('express');
const User = require("../model/user.model");
const CryptoJS = require('crypto-js');
const router = express.Router();


const signuphandler = require('../controllers/signupController')
const loginController = require('../controllers/loginController')

router.route("/register")
    .post(signuphandler)

router.route("/login")
    .post(loginController)


module.exports=router;