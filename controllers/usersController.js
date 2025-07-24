const db = require('../db');
exports.getAllUsers = (req, res) => {
  res.send('getAllUsers');
};

exports.createUser = (req, res) => {
  res.send('createUser');
};

exports.getUserById = (req, res) => {
  res.send('getUserById');
};

exports.updateUserById = (req, res) => {
  res.send('updateUserById');
};

exports.deleteUserById = async (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    return res.status(400).json({message: 'Invalid ID format!'});
  }
  const [results] = await db.query('DELETE FROM users WHERE id = ?', [id]);
  if (results.affectedRows === 0) {
    return res.status(404).json({message: 'Delete failed'})
  }
  res.send('deleteUserById');
};

exports.searchUsers = (req, res) => {
  res.send('searchUsers');
}; 