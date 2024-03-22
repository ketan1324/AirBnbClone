const Category = require("../model/category.model");//this capital data is of model


const categoryHandler = async(req,res)=>{
       
    try{
       const categoreiesAvailableinDB=await Category.find({});
       res.json(categoreiesAvailableinDB)   
     }
        
    catch(err){
        console.log(err);
        res.status(404).json({message:"Could not find categories"})
    }
   
}

module.exports=categoryHandler;