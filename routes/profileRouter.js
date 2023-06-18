const profilecontroll = require('../controllers/profilecontroll');
const router = require('express').Router();


router.route('/:userIdx?') 
    .post(profilecontroll.inserProfile);

    


module.exports = router;