const mongoose = require("mongoose");

// Schema
const bookSchema = new mongoose.Schema(
    {
  title:{
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
},
{
  timestamps:true,
}
);

// Model
const BookModel = mongoose.model("Books", bookSchema);

//exports

module.exports =BookModel;
