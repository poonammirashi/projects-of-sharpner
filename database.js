const Sequelize = require('sequelize');

const sequelize = new Sequelize('test-project', 'root', 'Poonam@23',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;