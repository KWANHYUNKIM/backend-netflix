const {validationResult, validateError} = require("express-validator");






module.exports = {
    validateError: (req, res, next) => {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        return res.status(400).json({ message : error.array()[0].msg})
    }
}