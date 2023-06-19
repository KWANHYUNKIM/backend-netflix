const profilecontroll = require('../controllers/profilecontroll');
const router = require('express').Router();


router.route('/:userIdx')
  
    .post(profilecontroll.inserProfile);

router.route('/:userIdx/:name')
    
    .patch(profilecontroll.updateProfile);
router.route('/:profileldx')

    .patch(profilecontroll.postProfile);
    
module.exports = router;