const express = require('express');
const router = express.Router();//router obj helps us to match path and function for that

const categoryHandler = require("../controllers/categoryController")

router.route("/")
    .get(categoryHandler);
module.exports=router;