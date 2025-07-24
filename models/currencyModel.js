// 货币表相关数据库操作

const pool = require('../db');

const currencyModel = {
  // 这里后续补充具体方法
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