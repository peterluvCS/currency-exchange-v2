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

async function searchUsers(keyword) {
  const kw = `%${keyword.toLowerCase()}%`;

  const [rows] = await pool.query(
    `
    SELECT email, username, role
    FROM users
    WHERE LOWER(email) LIKE ? OR LOWER(username) LIKE ?
    `,
    [kw, kw]
  );

  return rows;
}

module.exports = {
  userModel,
  searchUsers
};