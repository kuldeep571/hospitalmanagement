const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/SuperAbminModel');

const generateToken = (user) => {``
  return jwt.sign({ _id: user._id, role: user.role }, process.env.SECRETKEY , { expiresIn: process.env.EXPIRETIMEIN });
};

const register = async (req, res) => {
  try {
    const { name, email, password, role, contact } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance with hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      contact,
    });

    const savedUser = await newUser.save();

    // Respond with the saved user data
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const loginResponse = {
      message: `Login successful as ${user.role}`,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
    
    const token = generateToken(user);
    res.json({ token, ...loginResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { register, login };
