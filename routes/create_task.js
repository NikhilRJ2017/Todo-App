const express = require('express');
const router = express.Router();
const createTaskController = require('../controllers/create_task_controller');

//handling post request on localhost:3000/create_task
router.post('/', createTaskController.createTask);

module.exports = router;