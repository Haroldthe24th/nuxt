const mongoose = require("mongoose");


const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        unique: true,
        trim: true,
        maxlength: [40, "Title can not be more than 40 chars"]

    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [200, "Description can not be more than 200 chars"]
    }

})

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);