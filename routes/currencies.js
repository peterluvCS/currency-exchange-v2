const express = require('express');
const router = express.Router();
const currenciesController = require('../controllers/currenciesController');

router.get('/', currenciesController.getAllCurrencies);
router.post('/', currenciesController.createCurrency);
router.get('/search', currenciesController.searchCurrencies);
router.get('/:id', currenciesController.getCurrencyById);
router.put('/:id', currenciesController.updateCurrencyById);
router.delete('/:id', currenciesController.deleteCurrencyById);

module.exports = router; 