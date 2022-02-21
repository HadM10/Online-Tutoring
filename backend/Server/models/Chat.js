const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: "Users"
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        ref: "Users"
    },
    dateTime: dateTime,
    seen: Boolean,
    message: Text
}, { timestamps: true })


module.exports = mongoose.model('Chat', chatSchema)