const express = require('express');
const router = express.Router();
const Person = require('./../models/person.js');

router.post('/',async (req,res)=>{
    try{
        const data = req.body //assuming the req.body contains the person data
        const newPerson = new Person(data); // create a new person document using the mongoose model 
        const response = await newPerson.save(); // save the new version to the database
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error '});
    }
});

router.get('/',async (req,res)=>{
    try{
        const data = await Person.find(); // save the new version to the database
        console.log('data fetched successfully');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error '});
    }
});

router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='manager' ||workType=='waiter'){
            const response = await Person.find({work: workType});
            console.log('Response Fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work Type '})
        }
    }catch(err){
        res.status(500).json({error: 'Internal server error '});
    }
});

// how to update person data using put

router.put('/:id', async (req,res)=>{
    try{
        const personId = req.params.id; //extract the id form the url parameter
        const updatePersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('Data Updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error '});
    }
});

router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'data deleted successfully'});
    }catch(err){ 
        console.log(err);
        res.status(500).json({error: 'Internal server error '});
    }
});

module.exports = router;