const express = require("express");
const { getAllProducts, createProduct,updateProduct,deleteProduct } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router=express.Router();



router.route("/products").get(isAuthenticatedUser, getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,createProduct);
router.route("/product/:id").put(isAuthenticatedUser,updateProduct).delete(isAuthenticatedUser, deleteProduct);


module.exports = router