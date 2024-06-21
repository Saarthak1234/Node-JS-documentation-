const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true, // True here means giving the first name is compulsory
    },
    last_name: {
        type: String,
        required: false, // False means giving last name is not compulsory
    },
    email: {
        type: String,
        required: true,
        unique: true, // The email has to be unique
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
},{ timestamps: true});
const User = mongoose.model("user"/*name of the model*/, userSchema /*pass the schema declared above*/);
module.exports = User;