const currencyModel = require('../models/currencyModel');

exports.getAllCurrencies = (req, res) => {
  res.send('getAllCurrencies');
};

exports.createCurrency = (req, res) => {
  const { iso_code, name, country, symbol, is_active } = req.body;
  if (!iso_code || !name || !country || !symbol) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newCurrencyId = currencyModel.addCurrency(iso_code, name, country, symbol, is_active);
    res.status(201).json({ message: 'Currency added successfully.', id: newCurrencyId });
  } catch (error) {
    console.error('Error adding currency:', error);
    res.status(500).json({ error: 'Database error.' });
  }
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

exports.searchCurrencies = (req, res) => {
  res.send('searchCurrencies');
}; 