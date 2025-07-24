const currencyModel = require('../models/currencyModel');
exports.getAllCurrencies = async (req, res) => {
    try {
        const currencies = await currencyModel.getAllCurrencies();
        res.status(200).json(currencies);
      } catch (err) {
        res.status(500).json({ error: 'Failed to get currencies', detail: err.message });
      }
};

exports.createCurrency = (req, res) => {
  res.send('createCurrency');
};

exports.getCurrencyById = async (req, res) => {
    try {
      const id = req.params.id;
      const currency = await currencyModel.getCurrencyById(id);
      if (!currency) {
        return res.status(404).json({ error: 'Currency not found' });
      }
      res.status(200).json(currency);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get currency', detail: err.message });
    }
  };

exports.updateCurrencyById = (req, res) => {
  res.send('updateCurrencyById');
};

exports.deleteCurrencyById = (req, res) => {
  res.send('deleteCurrencyById');
};

exports.searchCurrencies = (req, res) => {
  res.send('searchCurrencies');
}; 