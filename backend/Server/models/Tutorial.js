const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
    title: String,
    price: Number,
    pricePerLesson: Number,
    photo: String,
    trainerId: {
        type: mongoose.Schema.ObjectId,
        ref: "Users"
    },
    subCategories: {
        type: mongoose.Schema.ObjectId,
        ref: "SubCategories"
    },
    dateTime: [
        {
            DateTime: Date,
            available: Boolean
        }
    ]
}, { timestamps: true })


module.exports = mongoose.model('Tutorial', tutorialSchema)