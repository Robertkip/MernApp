const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref : 'User',
        type: String,
        required: true
    },
    products: [
        {
        productId: {
            //type: mongoose.Schema.Types.ObjectId,
            type: String,
        },
        quantity: {
            type: Number,
            default: 1
        }
    }
]
}, {timestamps: true});

module.exports = mongoose.model('Cart', cartSchema);