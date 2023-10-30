const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    review: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    rating: Number
})

const recipeSchema = new mongoose.Schema({
    title: String,
    instructions: String,
    imagelink: String,
    comments: [commentSchema],
    rating: Number,
    datecreated: Date,
})



module.exports = mongoose.model('Recipe', recipeSchema);