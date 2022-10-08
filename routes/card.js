const app = require('express');
const router = app.Router();
const CardController = require('../controllers/CardController.js')

router.post('/create',CardController.createCard);
router.patch('/edit/:id',CardController.editCard);
router.get('/view/:id',CardController.viewCard);
router.delete('/delete/:id',CardController.deleteCard);
router.get('/getAllCards',CardController.getAllCardsForUser);
router.get('/searchCard/:id',CardController.searchCard);

module.exports = router;