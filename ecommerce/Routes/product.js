const express = require('express');
const router = express.Router();

const projectSchema = require('../models/appModels');


router.get('/', async (req, res) => {
    try {
        const product = await projectSchema.find();
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
});

router.post('/', async (req, res) => {
    try {
        const product = await projectSchema.create(req.body);
        console.log(product);
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
});

//Get user by id
router.get('/:id', async (req, res) => {
    try {
        const product = await projectSchema.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(product);
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Invalid Id provided' })
    }
});

//update user by id
router.put('/:id', async (req, res) => {
    try {
        const product = await projectSchema.findByIdAndUpdate(req.params.id, 
            { $set: req.body }, 
            { new: true });
            if (!product) {
                return res.status(404).json({ message: 'User not found' });
            }
            console.log(product);
            res.json(product);
        } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Invalid user by Id provided' })
    }
});

//delete user by id
router.delete('/:id', async (req, res) => {
    try {
        const product = await projectSchema.findByIdAndDelete(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'User not found' });
            }
            console.log(product);
            res.json(product);
        } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Invalid user by Id provided' })
    }
});

module.exports = router;