const Product=require("../models/productModel")
const catchAsyncErrors =require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");


//create Product 

exports.createProduct = catchAsyncErrors( async (req,res,next)=>{
  
     req.body.user = req.user.id
  
    const product= await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
})

//Get All Product

exports.getAllProducts = catchAsyncErrors( async(req,res,next)=>{
    
    const apiFeature =new ApiFeatures(Product.find(),req.query).search().filter()
    const products = await apiFeature.query

     res.status(201).json({
        success:true,
        products
    })
})

//Update products

exports.updateProduct =catchAsyncErrors( async (req,res,next)=>{

    let product =await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product =await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })

})

//Delete Product

exports.deleteProduct =catchAsyncErrors( async(req,res,next)=>{
    
    const product = await Product.findById(req.params.id) ;

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    await product.remove()

     res.status(200).json({
        success:true,
        message:"Product delete Successfully"
    })
})

