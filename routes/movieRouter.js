const movieCtrl = require('../controllers/movieCtrl')
const router = require('express').Router();

// api/movie
router.route('/')
    .get(movieCtrl.getMovies)
    .post(movieCtrl.insertMovie)


module.exports = router;