// 用户表相关数据库操作

const pool = require('../db');

const userModel = {
  // 这里后续补充具体方法

   async update(id, data) {
    const { email, password_hash, username, role } = data;
    const fields = [];
    const values = [];

    if (email) { fields.push('email = ?'); values.push(email); }
    if (password_hash) { fields.push('password_hash = ?'); values.push(password_hash); }
    if (username) { fields.push('username = ?'); values.push(username); }
    if (typeof role !== 'undefined') { fields.push('role = ?'); values.push(role); }

    
    if (fields.length === 0) {
      return { affectedRows: 0 };
    }

    values.push(id);
    const sql = `UPDATE users SET ${fields.join(', ')} WHERE user_id = ?`;

    const [result] = await pool.query(sql, values);
    return result;
  }
};

module.exports = userModel; 