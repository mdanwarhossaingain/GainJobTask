const express =require("express");
const { registeUser, loginUser,logout } = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registeUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout)


module.exports=router ;
