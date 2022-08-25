const mongoose =require("mongoose");

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter Product Name"]
    },

     brand:{
        type:String,
        required:[true,"Please Enter Product Brand"]
    },

    Ram:{
        type:Number,
        required:[true,"Please Enter Product Ram"],
        
    },

    Rom:{
        type:Number,
        required:[true,"Please Enter Product  Rom"],
        
    },

    images:[
        {
        public_id:{
            type:String,     
        },

        url:{
            type:String,    
        }
    }],

    Tags:{
        bestValue:{
            type:Number,
           
        },
        bestCamera:{
            type:Number,
           
        },  
        bestPerformance:{
            type:Number,
           
        },  
    } ,

   
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },


    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
    },

     createdAt:{
        type:Date,
        default:Date.now
    },

  



   
 

   
  
})

module.exports =mongoose.model("Product",productSchema)