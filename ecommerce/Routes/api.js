const express = require('express');
const router = express.Router();

const productSchema = require('../models/userModels');

router.get('/', async (req, res) => {
    try {
        const task = await productSchema.find();
        res.json(task);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
});

router.post('/', async (req, res) => {
    try {
        const task = await productSchema.create(req.body);
        console.log(task);
        res.json(task);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
});

//Get user by id
router.get('/:id', async (req, res) => {
    try {
        const task = await productSchema.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(task);
        res.json(task);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Invalid Id provided' })
    }
});

//update user by id
router.put('/:id', async (req, res) => {
    try {
        const task = await productSchema.findByIdAndUpdate(req.params.id, 
            { $set: req.body }, 
            { new: true });
            if (!task) {
                return res.status(404).json({ message: 'User not found' });
            }
            console.log(task);
            res.json(task);
        } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Invalid user by Id provided' })
    }
});

//delete user by id
router.delete('/:id', async (req, res) => {
    try {
        const task = await productSchema.findByIdAndDelete(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'User not found' });
            }
            console.log(task);
            res.json(task);
        } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Invalid user by Id provided' })
    }
});

module.exports = router;