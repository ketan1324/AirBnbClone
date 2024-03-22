const express = require('express'); //importing express
//adding hotel data to db
const Hotel = require("../model/hotel.model");//importing hotel model
const hotels = require("../data/hotels");//importing data of hotels

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
           
            
            const hotelsInDB = await Hotel.insertMany(hotels.data);//inserting all the data to hotel
            res.json(hotelsInDB)    //sending response to frontend about hotelsInDB
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add data to DB"})//erroneous response
        }
    })

module.exports = router;