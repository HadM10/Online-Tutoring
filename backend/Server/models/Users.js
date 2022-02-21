const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Users schema 
const UsersSchema = new Schema({
    fname: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },
    lname: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },
    email: {
        type: String,
        required: true,
        trim: false,
        unique: true,
        min: 6,
        max: 45,
    },
    photo: {
        type: String,
        required: false,
        trim: false,
    },
    age: {
        type: Number,
        required: true,
        max: 3
    },
    password: {
        type: String,
        required: true,
        minimum: 6,
        max: 255      // max 255 because we may later decide to encrypt the password
    },
    phone: {
        type: Number,
        required: True,
        minimum: 8,
        max: 45
    },
    country: {
        type: String,
        required: True,
        minimum: 3,
        max: 45
    },
    userType: {
        type: mongoose.Schema.ObjectId,
        ref: "UserType"
    },
}, { timestamps: true });

module.exports = mongoose.model("Users", UsersSchema);