const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {

    console.log('vf')
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    const token = generateToken(user);
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

function generateToken(user) {
  return jwt.sign({ id: user._id }, 'your-secret-key', { expiresIn: '1h' });
}