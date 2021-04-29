const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const User = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  role: {
    type: DataTypes.TEXT,
    isIn: [['administrador', 'cliente']]
  },
  email: {
    type: DataTypes.STRING,
    isEmail: true,
    unique: true
  },
  password: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  hooks: {
    beforeCreate: function (user, options, fn) {
      user.createdAt = new Date();
      user.updatedAt = new Date();
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
      //fn(null, user);
    },
    beforeUpdate: function (user, options, fn) {
      user.updatedAt = new Date();
      //fn(null, user);
    },
  },
})

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

return User;

};