const {
  getAllbooksController,
  deletedbookController,
  updatebookController,
  addNewbooksController,
} = require("../controllers/BooksCotrollers");
const bookVerification = require("../middelwares/bookVerification");
const bookRouter = require("express").Router();
const jwt=require('jsonwebtoken');
const verifytoken = require("../middelwares/verfiyToken");
const isAdmin = require("../middelwares/verifyAdmin");
require("dotenv").config()
const multer=require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    if(file)
    cb(null, 'hello' + '-' + Date.now()+`.${file.mimetype.split('/')[1]}`)
  else{
    cb('error',null)
  }
  }
})

const upload = multer({ storage })


//get all books
bookRouter.get("/", getAllbooksController);

//add new books
bookRouter.post(
  "/",
  upload.single("image"),
  bookVerification(),
  verifytoken,
  isAdmin,
  addNewbooksController
);

//delete books
bookRouter.delete("/:id", verifytoken, isAdmin, deletedbookController);
//updat books
bookRouter.put("/:id",verifytoken,isAdmin, updatebookController);

module.exports = bookRouter;


