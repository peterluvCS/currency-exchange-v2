exports.getAllCurrencies = (req, res) => {
  res.send('getAllCurrencies');
};

exports.createCurrency = (req, res) => {
  res.send('createCurrency');
};

exports.getCurrencyById = (req, res) => {
  res.send('getCurrencyById');
};

exports.getAllCurrencies = async (req, res) => {
  try {
    const currencies = await currencyModel.getAll();
    res.json(currencies);  // 返回JSON数组
  } catch (err) {
    console.error('查询货币列表出错:', err);
    res.status(500).json({ error: '数据库查询错误' });
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

exports.searchCurrencies = (req, res) => {
  res.send('searchCurrencies');
}; 