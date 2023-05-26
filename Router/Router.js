const express = require('express');
const { createNewUser, findSingleUser, findAllUser, deleteSingleUser, updateUserInfo } = require('../Controllers/UserContriller');
const router = express.Router();

router.use(express.urlencoded({extended:true}));
router.use(express.json());

// create new user 
router.post("/create/user",createNewUser);

// find single user
router.get("/single/user/:username",findSingleUser);

// find all user
router.get("/all/user",findAllUser);

// Delete single user 
router.delete("/delete/single/user/:username",deleteSingleUser);

// Update Single User Information 
router.put("/update/single/user/:username",updateUserInfo);

module.exports = router;