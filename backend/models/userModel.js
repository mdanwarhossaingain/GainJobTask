const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto =require("crypto")


const userSchema =new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxlength:[30,"Name can not exceed 30 Characters"],
        minlength:[3,"Name should have more than 3 Characters"]
    },

    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail, "Please Enter a valid Email"],
    },

    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minlength:[8,"Password should be greater than 8 Characters"],
        select:false,
    },

    

   
    createdAt:{
        type:Date,
        default:Date.now,
    },

    resetPasswordToken:String,
    resetPasswordExpire: Date,

})


userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        next() ;
    }
    this.password = await bcrypt.hash(this.password,10) ;
});

// JWT TOKEN 

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    })
}


//Compare Password

userSchema.methods.comparePassword = async function (enteredPassword) {

    return await bcrypt.compare(enteredPassword,this.password)
}




module.exports = mongoose.model("User",userSchema)
