const jwt = require('jsonwebtoken');
const User = require('../Models/SuperAbminModel');

const generateToken = (user) => {
  return jwt.sign({ _id: user._id, role: user.role }, 'secretKey', { expiresIn: '1h' });
};

const register =  async (req, res) => {
    try {
      const { email, password, role } = req.body;
      const user = new User({ email, password, role });
      await user.save();
      const token = generateToken(user);
      res.json({ token });
    } catch (error) {
      res.status(500).json(error.message);
    }
}

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      const token = generateToken(user);
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


module.exports = {register, login};