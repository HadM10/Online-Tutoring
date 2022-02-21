const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// User Type schema 
const UserTypeSchema = new Schema({

    UserType: {
        _id: ObjectId,
        type: String,
        enem: ['trainee', 'trainer']
    },
});

module.exports = mongoose.model("UserType", UserTypeSchema);