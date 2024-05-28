const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    productid:{
        type:Number,
        unique:true,
        default:1,
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    dateofcreation:{
        type:Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('product', newSchema);