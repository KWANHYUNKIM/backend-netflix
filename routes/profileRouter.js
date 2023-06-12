const profilecontroll = require('../controllers/profilecontroll');
const router = require('express').Router();

// api/movie
router.route(':userldx?keyword=profile')
    .post(profilecontroll.inserProfile)
   

module.exports = router;