exports.getAllUsers = (req, res) => {
  res.send('getAllUsers');
};


const userModel = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { email, password_hash, username, role } = req.body;

    // Validation
    if (!email || !password_hash || !username) {
      return res.status(400).json({ error: 'email, password_hash, and username are required' });
    }

    const result = await userModel.createUser({ email, password_hash, username, role });

    res.status(201).json({
      message: 'User created successfully',
      userId: result.userId
    });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email or username already exists' });
    }
    console.error('Create user error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getUserById = (req, res) => {
  res.send('getUserById');
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



