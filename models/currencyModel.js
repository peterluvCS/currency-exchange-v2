// 货币表相关数据库操作

const pool = require('../db');

const currencyModel = {
  // 这里后续补充具体方法
  deleteCurrencyById: async (id) => {
    const [results] = await db.query('DELETE FROM currencies WHERE id = ?', [id]);
    return results;
  }
};

module.exports = currencyModel; 