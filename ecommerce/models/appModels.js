const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    product : {
        type: String,
        required: [true, 'Please enter your product'],
        trim: true,
        maxLength: [50, 'Your product cannot exceed 30 characters']
    },
    price : {
        type: Number,
        required: [true, 'Please enter your price'],
        trim: true,
        unique: true
    },
    quantity : {
        type: Number,
        required: [true, 'Please enter your quantity'],
        trim: true,
    },
    description : {
        type: String,
        required: [true, 'Please enter your description'],
        trim: true,
    },
    image : {
        type: String,
        required: [true, 'Please enter your image'],
        trim: true,
    },
    category : {
        type: String,
        required: [true, 'Please enter your category'],
        trim: true,
    },
});
module.exports = mongoose.model('Product', projectSchema)