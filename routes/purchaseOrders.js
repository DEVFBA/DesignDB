const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// Get all Purchase Orders
router.get('/', async (req, res) => {
  const purchaseOrders = await sequelize.models.purchaseOrders.findAndCountAll();
  return res.status(200).json({ data: purchaseOrders });
});

// Creating a new Purchase Order
router.post('/', async (req, res) => {
  const { body } = req;
  const purchaseOrder = await sequelize.models.purchaseOrders.create({
    userId: body.userId
  });
  await purchaseOrder.save();

  return res.status(201).json({ data: purchaseOrder });
});



// Update a Purchase Order by id
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const purchaseOrder = await sequelize.models.purchaseOrders.findByPk(id);
  if (!purchaseOrder) {
    return res.status(404).json({ code: 404, message: 'Purchase Order not found' });
  }
  const updatedPurchaseOrder = await purchaseOrder.update({
    userId: body.userId
  });
  return res.json({ data: updatedPurchaseOrder });
});

// Delete a Purchase Order by id
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const purchaseOrder = await sequelize.models.purchaseOrders.findByPk(id);
  if (!purchaseOrder) {
    return res.status(404).json({ code: 404, message: 'Purchase Order not found' });
  }
  await purchaseOrder.destroy();
  return res.json();
});



module.exports = router;