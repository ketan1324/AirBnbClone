const express = require('express');
const router = express.Router();//router obj helps us to match path and function for that
const hotelHandler = require('../controllers/hotelController')


router.route("/")

    .get(hotelHandler)
module.exports=router;