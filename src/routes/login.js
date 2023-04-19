const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController');

router.get('/', loginController.index);

router.get('/', loginController.indexPost);

module.exports = router;
