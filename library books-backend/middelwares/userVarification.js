const {body}=require('express-validator')
function userVerification(){
    return [body('Youremail').isEmail(),body('password').notEmpty()]
}
module.exports=userVerification