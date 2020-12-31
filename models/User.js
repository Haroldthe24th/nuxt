const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add a username"],
        unique: true,
        trim: true,
        maxlength: [40, "username can not be more than 40 chars"]

    },
    password: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [200, "Description can not be more than 200 chars"]
    }

})

module.exports = mongoose.models.Note || mongoose.model("User", UserSchema);