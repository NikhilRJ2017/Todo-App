const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/home_controller');

router.get('/', homeControllers.home);

router.use('/create_task', require('./create_task'));

module.exports = router;