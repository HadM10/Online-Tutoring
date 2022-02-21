const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    certificate: {
        type:String,
        required: true,
        uppercase: true,
        min: 4,
        max: 255 },

    speciality: {
        type: String,
        required: true,
        uppercase: true,
        min: 4,
        max: 255 } ,

    meetingUrl: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Trainer', trainerSchema)