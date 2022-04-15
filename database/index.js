const Sequelize = require('sequelize');

const sequelize = new Sequelize('mticket', 'root', '3027azsx', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;