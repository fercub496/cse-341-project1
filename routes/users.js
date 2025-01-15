const express = require('express');

const router = express.Router();

const userController = require ('../controllers/user');

router.get('/',userController.getAll);

router.get('/', userController.getSingle);

module.exports = router;