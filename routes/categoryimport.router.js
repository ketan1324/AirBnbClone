

const express = require('express'); //importing express
//adding hotel data to db
const Category = require("../model/category.model");//importing hotel model
const categories = require("../data/categories");//importing data of hotels

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
            const CategoryInDB = await Category.insertMany(categories.data);//inserting all the data to hotel
            res.json(CategoryInDB)    //sending response to frontend about hotelsInDB
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add category to DB"})//erroneous response
        }
    })

module.exports = router;