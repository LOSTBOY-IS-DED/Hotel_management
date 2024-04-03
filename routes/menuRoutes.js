const express = require('express');
const router = express.Router();
const menuItem = require('./../models/MenuItem.js');

//post method to add menuItems
router.post('/',async (req,res)=>{
    try{
        const data = req.body //assuming the req.body contains the person data
        const newMenu = new menuItem(data); // create a new person document using the mongoose model 
        const response = await newMenu.save(); // save the new version to the database
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error '});
    }
});

router.get('/',async (req,res)=>{
    try{
        const data = await menuItem.find(); // save the new version to the database
        console.log('data fetched successfully');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error '});
    }
});

module.exports =router;