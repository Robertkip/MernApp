const express = require('express');
const router = express.Router();

const userSchema = require('../../Models/userModel');

//Get all users
router.get('/', async (req, res) => {
    try {
        const data = await userSchema.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'error.message'});
        }
    });

//Create new user
router.post('/', async (req, res) => {
    try {
        const data = await userSchema.create(req.body);
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'error.message'});
        }
    });

//Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const data = await userSchema.findById(req.params.id);
        if (!data) {
            return res.status(404).send({message: 'User not found'});
        }
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'Invalid ID'});
        }
    });

//Update user by ID
router.put('/:id', async (req, res) => {
    try {
        const data = await userSchema.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });
            if (!data) {
                return res.status(404).json({message: 'User Id not found to update'});
            }
            console.log(data);
            res.json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'Invalid Id of the user'})
        }
    });


//Delete user by ID
router.delete('/:id', async (req, res) => {
    try {
        const data = await userSchema.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({message: "User Id not found you entered a wrong Id"});
        }
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Invalid Id of the user'})
    } 
    });

module.exports = router;