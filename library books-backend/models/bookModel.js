const mongoose=require('mongoose')


const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authors: { type: String },
  category:{type:String},
  description:{ type: String},
  paper: { type: Number },
  postUrl:{type:Number},
  rating: { type: Number },
});

const bookModel=mongoose.model('book',bookSchema)
module.exports=bookModel