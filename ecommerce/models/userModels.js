const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        maxLength: [50, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        unique: true
    },
    role: {
        type: String,
        default: 'user',
        option: ['user', 'admin', 'manager']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        trim: true
    },
    avatar: {
        type: String,
        default: 'https://plus.unsplash.com/premium_photo-1664301239248-e3a31726f9d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
});
productSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
});



module.exports = mongoose.model('User', productSchema)