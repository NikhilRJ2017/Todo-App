const express = require('express');
const router = express.Router();

const deleteTaskController = require('../controllers/delete_task_controller');

router.delete('/', deleteTaskController.deleteTask);

module.exports = router;