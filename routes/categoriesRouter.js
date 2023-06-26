const categoriescontroll = require('../controllers/categoriescontroll');
const router = require('express').Router();

router.route('/main')
    .get(categoriescontroll.getMain)
   
router.route('/series')
    .get(categoriescontroll.getSeries)

router.route('/movie')
    .get(categoriescontroll.getMovies)

module.exports = router;
