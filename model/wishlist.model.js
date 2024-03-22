const mongoose = require('mongoose')
//typeof wishlistSchema is Object


const wishlistSchema = new mongoose.Schema({
    hotelId:   {type:String,required:true}
})

//typeof wishlistSchema is function
const Wishlist = mongoose.model("Wishlist",wishlistSchema);
module.exports=Wishlist;