// const dbConfig = require('../config/dbConfig')
const dbConfig = require ('../config/dbConfig.js');
const{ Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect:dbConfig.dialect,
        operators: false,
        database: dbConfig.DB,
        operatorsAliases: false
    }
)

sequelize.authenticate()

.then(()=>{
    console.log('database connection succesfull...');
})
.catch(err =>{
    console.log('Error', err);
})
const db={}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.students = require('./studentModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
.then(()=>{
    console.log('re-sync done')
});
module.exports =db;