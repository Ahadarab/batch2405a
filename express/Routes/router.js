const express = require("express");

const {signUp , login , getAllUsers, singleUserData , deleteSingleUser} = require("../controller/authController");
const verifiedToken = require("../utils/verifiedToken");

 

let router = express.Router();

// http://localhost:1000/api/v1/auth/signIn

router.post("/signUp", signUp)
router.post("/login", login)
router.get("/getAllUsers", getAllUsers)
// router.get("/:id", singleUserData)
// router.delete("/:id", deleteSingleUser)


router.get('/profile',verifiedToken,(req,res)=>{
    return res.json({
        status : true,
        message : "User Profile"
    })
})
// router.get('/picture',verifiedToken,(req,res)=>{
//     return res.json({
//         status : true,
//         message : "User Profile"
//     })
// })














router.get("/",(req,res)=>{
    res.json({
        status : true, 
        messgae : "Data Fetch Successfully",
        data : users
    })
})
router.delete("/",(req,res)=>{
    res.json({
        status : true, 
        messgae : "Data Deleted Successfully"
    })
})
router.put("/",(req,res)=>{
    res.json({
        status : true, 
        messgae : "All Data Upated Successfully"
    })
})
router.patch("/",(req,res)=>{
    res.json({
        status : true, 
        messgae : " Data Upated Successfully"
    })
})

module.exports = router