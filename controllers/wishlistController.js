const {create} = require("../model/hotel.model");
const Wishlist = require('../model/wishlist.model')

const createWishlistHandler = async(req,res)=>{
    const newWishlist = new Wishlist(req.body);
    try{
        const savedWishlist  = await newWishlist.save();
        res.status(200).json(savedWishlist);
    }catch(err){
        res.status(500).json({message:"failed to create a wishlist"})
    }
}

const deleteWishlistHandler = async(req,res)=>{
        
    try{
        await Wishlist.findByIdAndDelete(req.params.id);
        console.log("inside try of delete")
        res.json({ message: "Hotel Deleted From Wishlist"})
    }catch(err){
        res.status(500).json({ message: "Could not delete hotel from wishlist" })
    }

}

const getWishlistHandler =async(req,res)=>{
        
    try{
        const ShowWishlist =  await Wishlist.find({})            
        ShowWishlist ? res.json(ShowWishlist):res.json({message:"No items found in the whilist"})
    }catch(err){
        res.status(500).json(err)
    }

}

module.exports = {createWishlistHandler,deleteWishlistHandler,getWishlistHandler};