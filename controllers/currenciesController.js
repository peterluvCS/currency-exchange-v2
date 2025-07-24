const currencyModel = require("../models/currencyModel");

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

exports.deleteCurrencyById = async (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    return res.status(400).json({message: 'Invalid ID format!'});
  }
  const results = currencyModel.deleteCurrencyById(id);
  if (results.affectedRows === 0) {
    return res.status(404).json({message: 'Delete failed'})
  }
  res.send('deleteCurrencyById');
};

exports.searchCurrencies = (req, res) => {
  res.send('searchCurrencies');
}; 