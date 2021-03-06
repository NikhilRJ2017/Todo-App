/**
 * Root route: All the requests are sent through this file
 */
const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/home_controller');

router.get('/', homeControllers.home);

router.use('/create_task', require('./create_task'));
router.use('/delete_task', require('./delete_task'));
router.use('/get_count', require('./get_count'));

module.exports = router;