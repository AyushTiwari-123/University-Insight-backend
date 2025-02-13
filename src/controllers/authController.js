import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (await User.findOne({ email })) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ name, email, password, role });
  res.status(201).json({ token: generateToken(user._id), user });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({ token: generateToken(user._id), user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
