const router = require('express').Router();
const userRoute = require('./userRoute');
const blogRoute = require('./blogRoute');

router.use('/User', userRoute);
router.use('/Blog', blogRoute);


module.exports = router;