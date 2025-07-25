// 用户表相关数据库操作

const pool = require('../db');

const userModel = {
  // 这里后续补充具体方法
  // Get all users
  async getAllUsers() {
    const [rows] = await pool.query('SELECT email, password_hash, username, role FROM users');
    return rows;
  },

  // Get a user by id
  async getUserById(id) {
    const [rows] = await pool.query(
        'SELECT email, password_hash, username, role FROM users WHERE user_id = ?',
        [id]
      );
    return rows[0];
  },

};

module.exports = userModel; 