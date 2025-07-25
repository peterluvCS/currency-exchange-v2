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
  },
  
  async getAll() {
    const sql = 'SELECT id, iso_code, name, country, symbol, is_active FROM currencies ORDER BY id ASC';
    const [rows] = await pool.query(sql);
    return rows;
  },
  
  // Get all currencies
  async getAllCurrencies() {
    const [rows] = await pool.query('SELECT iso_code, name, country, symbol, is_active FROM currencies');
    return rows;
  },

  // Get a currency by id
  async getCurrencyById(id) {
    const [rows] = await pool.query(
        'SELECT iso_code, name, country, symbol, is_active FROM currencies WHERE id = ?',
        [id]
      );
    return rows[0];
  },
  addCurrency: async (iso_code, name, country, symbol, is_active = true) => {
    const query = `
      INSERT INTO currencies (iso_code, name, country, symbol, is_active)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [iso_code, name, country, symbol, is_active]);
    return result.insertId; // 返回新插入记录的ID
  }

};


async function searchCurrencies(keyword) {
  const lowerKeyword = `%${keyword.toLowerCase()}%`;

  const [rows] = await pool.query(
    `
    SELECT * FROM currencies
    WHERE 
      LOWER(iso_code) LIKE ? OR
      LOWER(name) LIKE ? OR
      LOWER(country) LIKE ?
    `,
    [lowerKeyword, lowerKeyword, lowerKeyword]
  );

  return rows;
}

module.exports = {
  currencyModel,
  searchCurrencies
}; 

