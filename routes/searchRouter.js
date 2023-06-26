const searchescontroll = require('../controllers/searchescontroll');
const router = require('express').Router();

router.route('/')
    .get(searchescontroll.getSearches)
   

module.exports = router;