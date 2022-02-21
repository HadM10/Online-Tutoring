const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    CategoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
            },
    name:   {
        type: String,
        required: true
            },

    photo: {
        type: String,
        equired: true
            },
    timestamps: true 
})
module.exports = mongoose.model('Category', CategorySchema)