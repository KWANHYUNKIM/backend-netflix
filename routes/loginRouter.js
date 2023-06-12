const logincontroll = require('../controllers/logincontroll');
const router = require('express').Router();

// api/movie
router.route('/:email/:password')
    .get(logincontroll.getLogin)
   

module.exports = router;