const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    bookId:{
        type:String,
        required:true,
        unique:true
    },
    publishedYear:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
})

const book = mongoose.model("books",bookSchema)
module.exports = book