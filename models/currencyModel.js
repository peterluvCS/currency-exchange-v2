// 货币表相关数据库操作

const pool = require('../db');

const currencyModel = {
  // 这里后续补充具体方法
  addCurrency: async (iso_code, name, country, symbol, is_active = true) => {
    const query = `
      INSERT INTO currencies (iso_code, name, country, symbol, is_active)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [iso_code, name, country, symbol, is_active]);
    return result.insertId; // 返回新插入记录的ID
  }

};

module.exports = currencyModel; 