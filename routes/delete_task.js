const express = require('express');
const router = express.Router();

const deleteTaskController = require('../controllers/delete_task_controller');

//handling delete request on localhost:3000/delete_task
router.delete('/', deleteTaskController.deleteTask);

module.exports = router;