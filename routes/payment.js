var express = require('express');
var router = express.Router();
const PaymentController = require('../controllers/PaymentController');

/* GET users listing. */
router.get('/', PaymentController.getPayment);
router.patch('/', PaymentController.updatePayment);

module.exports = router;
