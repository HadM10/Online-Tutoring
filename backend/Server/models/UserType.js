const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// User Type schema 
const UserTypeSchema = new Schema({
    UserType: String
    
}, {timestamps: true});

module.exports = mongoose.model("UserType", UserTypeSchema);