const currencyModel = require('../models/currencyModel');

exports.getAllCurrencies = (req, res) => {
  res.send('getAllCurrencies');
};

exports.createCurrency = (req, res) => {
  res.send('createCurrency');
};

exports.getCurrencyById = (req, res) => {
  res.send('getCurrencyById');
};

exports.updateCurrencyById = (req, res) => {
  res.send('updateCurrencyById');
};

exports.deleteCurrencyById = (req, res) => {
  res.send('deleteCurrencyById');
};


exports.searchCurrencies = async (req, res) => {
  const keyword = req.query.keyword || '';

  try {
    const rows = await currencyModel.searchCurrencies(keyword);
    res.json(rows);
  } catch (error) {
    console.error('Error searching currencies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};