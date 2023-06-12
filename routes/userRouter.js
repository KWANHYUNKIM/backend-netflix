const usercontroll = require('../controllers/usercontroll')
const router = require('express').Router();

// api/movie
router.route('/')
    .post(usercontroll.insertUser)
router.route('/:membershipIdx')
    .get(usercontroll.getMembership);
router.route('/card')
    .post(usercontroll.insertCard)
module.exports = router;

