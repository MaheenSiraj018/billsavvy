// login.js

const express = require('express');
const router = express.Router();
const User = require('./user.js');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Request body:', req.body);
    const user = await User.findOne({ email:email });
    console.log('Retreived user:',user);

    if (!user) {
      console.log('user not found');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch)
     {console.log('Password doesnt match');

      return res.status(401).json({ message: 'Invalid password' });
    }

    // Login successful
    console.log('login successful');
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

module.exports = router;