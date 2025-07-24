// 用户表相关数据库操作

const pool = require('../db');

const userModel = {
  createUser: ({ email, password_hash, username, role }) => {
    return new Promise((resolve, reject) => {
      const sql = `
        INSERT INTO users (email, password_hash, username, role)
        VALUES (?, ?, ?, ?)
      `;
      const values = [email, password_hash, username, role ?? 0];

      pool.query(sql, values, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve({ userId: results.insertId });
      });
    });
  }
};

module.exports = userModel;
