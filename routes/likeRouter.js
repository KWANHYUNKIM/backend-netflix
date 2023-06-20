const logincontroll = require('../controllers/likescontroll');
const router = require('express').Router();

router.route('/')
    .get(logincontroll.getlikes)
   

module.exports = router;
