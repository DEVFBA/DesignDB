const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');
const PurchaseOrder = require('./models/PurchaseOrder');
const PurchaseOrderProduct = require('./models/PurchaseOrderProduct');

// Database connection
const sequelize = new Sequelize('DesignDB', 'admin', 'D3vfb@27', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

// Getting models
const models = [
  Product,
  Review,
  User,
  PurchaseOrder,
  PurchaseOrderProduct
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { products, reviews, users, purchaseOrders, purchaseOrderProducts } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table
purchaseOrders.belongsTo(users); // Relation one-to-one in reviews table


module.exports = sequelize;