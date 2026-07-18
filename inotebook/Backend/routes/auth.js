const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/', async (req, res) => {
   try {
      console.log('Request body:', req.body);
      const { name, email, password } = req.body;
      
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      // Create user
      const user = await User.create({
         name,
         email,
         password: hashedPassword
      });
      
      console.log('User created:', user);
      res.json({ message: 'User created successfully', user });
   } catch (error) {
      console.error('Error:', error.message);
      res.status(400).json({ error: error.message });
   }
});

module.exports = router;