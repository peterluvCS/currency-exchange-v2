// 货币表相关数据库操作

const pool = require('../db');

const currencyModel = {
  // 这里后续补充具体方法
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
  }

};

module.exports = currencyModel; 