const app = require('express');
const router = app.Router();
const FranchiseController = require('../controllers/FranchiseController.js')

router.post('login',FranchiseController.login);
router.post('logout',FranchiseController.logout);
router.post('forgot-password',FranchiseController.forgotPassword);

module.exports = router;
