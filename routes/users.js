var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', UserController.getCurrentUser);
router.get('/profile', UserController.getProfile);
router.patch('/profile', UserController.updateProfile);

module.exports = router;
