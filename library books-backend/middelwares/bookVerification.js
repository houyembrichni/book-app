const {body}=require('express-validator')
function bookVerification(){
    return [
      body("title").isLength({ min: 3 }),
      body("paper").notEmpty().isInt({ min: 1, max: 100000000 }),
    ];
}
module.exports = bookVerification;