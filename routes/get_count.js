const express = require('express');
const router = express.Router();

const getCountController = require('../controllers/get_count_controller');
router.get('/', getCountController.getCount);

module.exports = router;