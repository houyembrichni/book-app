const { validationResult } = require("express-validator");
const asyncWrapper = require("../middelwares/asyncWrapper");
const bookModel = require("../models/bookModel");


const getAllbooksController = asyncWrapper(async (req, res) => {

  if (req.query) {
    const books = await bookModel.find().limit(req.query.limit);
    res.json({ status: "success", data: books });
  } else {
    const allbooks = await bookModel.find();
    res.json({ status: "success", data: allbooks });
  }

});
//_________________________________________
const addNewbooksController = asyncWrapper(async (req, res, next) => {
  console.log("hello");

  const book = {...req.body,image:req.file.filename};
  const newbook = await bookModel.create(book);
  res.json({ status: "success", data: newbook });
});
//____________________________________________
const deletedbookController = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const deletedbook = await bookModel.findByIdAndDelete(id);
  res.json({ status: "success", data: deletedbook });
});
//______________________________________________
const updatebookController = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const updatedbook = await bookModel.findByIdAndUpdate(id, req.body);
  res.json({ status: "success", data: updatedbook });
});

module.exports = {
  getAllbooksController,
  addNewbooksController,
  deletedbookController,
  updatebookController,
};
