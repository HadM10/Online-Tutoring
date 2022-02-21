const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    tutorial: {
        type: mongoose.Schema.ObjectId,
        ref: "Tutorial"
    },
    title: String,
    description: String,
    trainee: [{
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "Users"
        },
        chosenDate: dateTime,
        done: Boolean
    }],
}, { timestamps: true })


module.exports = mongoose.model('Lesson', lessonSchema)