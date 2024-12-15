const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderPlacementSchema = new Schema(
    {
        cardNumber: {
            type: Number,
            required: true,
        },
        yearMonth: {
            type: Number,
            required: true,
        },
        cnn: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        visaMasterCard: {
            type: String,
            required: true,
        },
        productName:{
            type: String,
            required: true,
        },
        productPrice:{
            type: String,
            required: true,
        },
        user_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Payment', orderPlacementSchema);
