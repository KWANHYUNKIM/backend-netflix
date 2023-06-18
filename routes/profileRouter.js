const profilecontroll = require('../controllers/profilecontroll');
const router = require('express').Router();


router.route('/:userIdx?keyword=profile')
    .post(profilecontroll.inserProfile)



module.exports = router;