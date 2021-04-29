const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Get all users
router.get('/', permission('administrador'), async (req, res) => {
  const users = await sequelize.models.users.findAndCountAll();
  return res.status(200).json({ data: users });
});

// Creating a new user
router.post('/', permission('administrador', 'cliente'), async (req, res) => {
  const { body } = req;
  const user = await sequelize.models.users.create({
    name: body.name,
    role: body.role,
    email: body.email,
    password: body.password
  });
  await user.save();
  return res.status(201).json({ data: user });
});

// Update a review by id
router.put('/:id', permission('administrador', 'cliente'), async (req, res) => {
  const { body, params: { id } } = req;
  const user = await sequelize.models.users.findByPk(id);
  if (!user) {
    return res.status(404).json({ code: 404, message: 'User not found' });
  }
  const updatedUser = await user.update({
    name: body.name,
    role: body.role,
    email: body.email,
    password: body.password
  });
  return res.json({ data: updatedUser });
});

// Delete a review by id
router.delete('/:id', permission('administrador'), async (req, res) => {
  const { params: { id } } = req;
  const user = await sequelize.models.users.findByPk(id);
  if (!user) {
    return res.status(404).json({ code: 404, message: 'User not found' });
  }
  await user.destroy();
  return res.json();
});

module.exports = router;