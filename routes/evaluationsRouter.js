const evaluationscontroll = require('../controllers/evaluationscontroll');
const router = require('express').Router();

router.route('/:userIdx')
  
    .post(evaluationscontroll.insertevaluations);

module.exports = router;