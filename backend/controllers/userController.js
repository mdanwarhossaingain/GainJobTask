const catchAsyncErrors =require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken")


// Register a User 

exports.registeUser =catchAsyncErrors(async(req,res,next)=>{

    const {name,email,password} = req.body ;

    const user= await User.create({
        name,email,password,
    });

     sendToken(user,201,res);

     

})


// Login User 


exports.loginUser =catchAsyncErrors(async(req,res,next)=>{

    const {email,password}= req.body ;

    // checking if user has given password and email both

    if(!email || !password){
   
        return res.status(400).json({
            success:false,
            message:"Please enter email or password"
        })
    }

    const user = await User.findOne({email:email}).select("+password");

    if(!user){
         return res.status(401).json({
            success:false,
            message:"Invalid email or password"
        })

    }

    const isPasswordMatched = await user.comparePassword(password) ;

    if(!isPasswordMatched){

         return res.status(401).json({
            success:false,
            message:"Invalid email or password"
        })

    }


    sendToken(user,200,res);

})


//Logout User 

exports.logout =catchAsyncErrors(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });

    res.status(200).json({
        success:true,
        message:"Logged Out"
    });
});