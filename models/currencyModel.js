// 货币表相关数据库操作

const pool = require('../db');

function isValidString(str) {
  return typeof str === 'string' && str.trim() !== '';
}

const currencyModel = {
  async update(currencyId, currencyData) {
    const fields = [];
    const values = [];

    if (isValidString(currencyData.iso_code)) {
      fields.push('iso_code = ?');
      values.push(currencyData.iso_code.trim());
    }
    if (isValidString(currencyData.name)) {
      fields.push('name = ?');
      values.push(currencyData.name.trim());
    }
    if (isValidString(currencyData.country)) {
      fields.push('country = ?');
      values.push(currencyData.country.trim());
    }
    if (isValidString(currencyData.symbol)) {
      fields.push('symbol = ?');
      values.push(currencyData.symbol.trim());
    }
    if (typeof currencyData.is_active !== 'undefined') {
      fields.push('is_active = ?');
      values.push(currencyData.is_active);
    }

    if (fields.length === 0) {
      throw new Error('No valid fields provided to update');
    }

    values.push(currencyId);
    const sql = `UPDATE currencies SET ${fields.join(', ')} WHERE id = ?`;
    return pool.query(sql, values);
  }
};

module.exports = currencyModel; 