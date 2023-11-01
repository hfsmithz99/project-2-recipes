const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    review: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3,
    }
})

const recipeSchema = new mongoose.Schema({
    title: String,
    instructions: String,
    imagelink: String,
    creator: String,
    comments: [commentSchema],
    rating: Number,
    datecreated: Date,
})



module.exports = mongoose.model('Recipe', recipeSchema);