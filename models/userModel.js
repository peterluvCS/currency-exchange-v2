// 用户表相关数据库操作

const pool = require('../db');

const userModel = {
  // 这里后续补充具体方法
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