require('dotenv').config();
const defaultconfig={
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql'
}

module.exports = {
  development: defaultconfig,
  production: Object.assign(defaultConfig, {})
}