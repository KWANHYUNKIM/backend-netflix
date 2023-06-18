const usercontroll = require('../controllers/usercontroll')
const router = require('express').Router();

// api/movie
router.route('/')
    .post(usercontroll.insertUser)


module.exports = router;