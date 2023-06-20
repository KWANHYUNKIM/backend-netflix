const usercontroll = require('../controllers/usercontroll')
const router = require('express').Router();
const {body, validationResult} = require('express-validator');
// api/movie
router.post('/', 
        [
            body("email")
            .notEmpty()
            .isEmail()
            ,
            body("password")
                .notEmpty()
                .isLength({ min : 4, max : 20})
                ,
                (req,res,next) => {
                    const error = validationResult(req);
                    if(!error.isEmpty()){
                        res.status(400).json(error);
                    }
                    else{
                        next();
                    }
                }
        ],
    usercontroll.insertUser
    );

//router.post('/pwd')
//        .patch(usercontroll.)
module.exports = router;