const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

app.use(helmet()); // Basic configuration for helmet
app.use(cors()) // Basic configuration for enable CORS
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use('/api', require('./routes'));

app.listen(process.env.PORT, ()=>{
  console.log('Express Ready', process.env.PORT);
});

/* const sequelize = new Sequelize('DesignDB', 'admin', 'D3vfb@27', {
  host: 'localhost',
  dialect: 'mysql'
}); */

/* async function testing(){
  
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

}

testing(); */