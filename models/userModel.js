// 用户表相关数据库操作

const pool = require('../db');

const userModel = {
  // 这里后续补充具体方法
  deleteUserById: async (id) => {
    const [res] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return res;
  }
};

module.exports = userModel; 