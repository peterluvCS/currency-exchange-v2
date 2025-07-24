const userModel = require('../models/userModel');
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
  const results = await userModel.deleteUserById(id);
  
  res.send('deleteUserById');
};

exports.searchUsers = (req, res) => {
  res.send('searchUsers');
}; 