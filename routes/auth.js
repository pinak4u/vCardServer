const app = require('express');
const router = app.Router();
const AuthController = require('../controllers/AuthController.js')

router.post('login',AuthController.login);
router.post('logout',AuthController.logout);
router.post('forgot-password',AuthController.forgotPassword);

module.exports = router;