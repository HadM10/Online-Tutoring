const mongoose = require('mongoose');
const ProfileTrainerSchema = new mongoose.Schema({
    ProfileTrainerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User" },

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

    MeetingUrl: {
        type: String,
        required: true
    },

    timestamps: true 

})

module.exports = mongoose.model('ProfileTrainer', ProfileTrainerSchema)