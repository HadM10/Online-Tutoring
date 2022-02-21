const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    name:   {
        type: String,
        required: true
            },

    photo: {
        type: String,
        required: true
            },
    CategoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "SubCategory"
            },
}, {timestamps: true})
module.exports = mongoose.model('Category', CategorySchema)