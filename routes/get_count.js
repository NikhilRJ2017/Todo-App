const express = require('express');
const router = express.Router();

const getCountController = require('../controllers/get_count_controller');

//handling get request on localhost:3000/get_count
router.get('/', getCountController.getCount);

module.exports = router;