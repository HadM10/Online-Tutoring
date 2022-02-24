const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users"
    },
    
    certificate: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },

    speciality: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },

    meetingUrl: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Trainer', trainerSchema)