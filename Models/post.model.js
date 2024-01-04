const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discount: Number,
    category: String
}, {
    versionKey : false
});


const postModel = mongoose.model("users", postSchema);


module.exports = {
    postModel
}