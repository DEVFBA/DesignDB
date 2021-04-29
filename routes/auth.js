const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const sequelize = require('../db');

router.post('/login', async (req, res) => {
    const { body } = req;
    const user = await sequelize.models.users.findOne({ where: {
      email: body.email,
    }});
  
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    if (!user.validPassword(body.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    // Generate a token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_TOKEN, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  
    return res.json({
      message: 'Authenticated sucessfully',
      token,
    });
});

router.post('/signup', async (req, res) => {
  const { body } = req;

  const user = await sequelize.models.users.findOne({ where: {
    email: body.email,
  }});

  if (user) {
    return res.status(400).json({ message: 'Usuario ya existe' });
  } else {
    const userRegister = await sequelize.models.users.create({
        name: body.name,
        role: 'cliente',
        email: body.email,
        password: body.password
      });
      await userRegister.save();
      return res.status(201).json({ data: userRegister });
  }

});

module.exports = router;