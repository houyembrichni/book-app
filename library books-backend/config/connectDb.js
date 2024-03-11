 const mongoose=require('mongoose')
 require('dotenv').config()
 function connectToDb(){
    mongoose
      .connect(process.env.MONGO_URI, { dbName: "bookProject" })
      .then(() => {
        console.log("connected to db");
      })
      .catch((err) => {
        console.log(err);
      }); 
 }
 module.exports=connectToDb