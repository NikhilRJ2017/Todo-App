const express = require('express');
const router = express.Router();
const createTaskController = require('../controllers/create_task_controller');

router.post('/', createTaskController.createTask);

module.exports = router;