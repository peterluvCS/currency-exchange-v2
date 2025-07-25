const { userModel } = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get users', detail: err.message });
    }
};

exports.createUser = (req, res) => {
  res.send('createUser');
};

exports.getUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await userModel.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get user', detail: err.message });
    }
};

exports.updateUserById = (req, res) => {
  res.send('updateUserById');
};

exports.deleteUserById = (req, res) => {
  res.send('deleteUserById');
};

exports.searchUsers = (req, res) => {
  res.send('searchUsers');
};

exports.searchUsers = async (req, res) => {
  const keyword = req.query.keyword || '';

  try {
    const users = await userModel.searchUsers(keyword);
    res.json(users);
  } catch (error) {
    console.error('Error searching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};