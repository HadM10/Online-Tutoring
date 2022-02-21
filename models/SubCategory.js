const mongoose = require('mongoose');
const SubCategorySchema = new mongoose.Schema({
    SubCategoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
            },
    name:   {
        type: String,
        required: true
            },

    timestamps: true 

})

module.exports = mongoose.model('SubCategory', SubCategorySchema)