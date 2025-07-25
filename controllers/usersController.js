const { userModel } = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get users', detail: err.message });
    }
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
const userModel = require('../models/userModel');

// PUT /users/:id
exports.updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const { email, password_hash, username, role } = req.body;

    
    if (!email && !password_hash && !username && !role) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    const result = await userModel.update(id, { email, password_hash, username, role });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found or no fields updated' });
    }

    res.json({ message: `User ${id} updated successfully` });
  } catch (err) {
    console.error('User update error:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

exports.deleteUserById = (req, res) => {
  res.send('deleteUserById');
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
