const { currencyModel } = require('../models/currencyModel');
exports.getAllCurrencies = async (req, res) => {
    try {
        const currencies = await currencyModel.getAllCurrencies();
        res.status(200).json(currencies);
      } catch (err) {
        res.status(500).json({ error: 'Failed to get currencies', detail: err.message });
      }
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

// PUT /currencies/:id
const currencyModel = require('../models/currencyModel');

exports.updateCurrencyById = async (req, res) => {
  try {
    const id = req.params.id;
    const { iso_code, name, country, symbol, is_active } = req.body;

    if (!iso_code || !name || !country || !symbol || !(typeof is_active === 'boolean')) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await currencyModel.update(id, { iso_code, name, country, symbol, is_active });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Currency not found' });
    }

    res.json({ message: `Currency ${id} updated successfully` });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Database error' });
  }
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