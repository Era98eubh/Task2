const { Sequelize, DataTypes } = require('sequelize')
const dbconfig = require('../config/dbconfig')


const sequelize = new Sequelize(

    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorsAliases:false,

        pool: {
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle:dbconfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then( ()=>{
    console.log('connected...')
})
.catch(err =>{
    console.log('Error'+err)
})

const db ={}

db.Sequelize =Sequelize
db.sequelize =sequelize

db.advertisments =require('./advertismentModel.js')(sequelize,DataTypes)
db.sellers =require('./SellerModel.js')(sequelize,DataTypes)
db.users =require('./UserModel.js')(sequelize,DataTypes)

db.sequelize.sync({ force:false})
.then(()=>{
    console.log('sync done!')
})

//1 to many relation
db.sellers.hasMany(db.advertisments,{
    foreignKey:'seller_id',
    as: 'advertisment'
})

db.advertisments.belongsTo(db.sellers,{
    foreignKey:'seller_id',
    as: 'seller'
})

//1 to many relation
db.users.hasOne(db.sellers,{
    foreignKey:'user_id',
    as: 'seller'
})

db.sellers.belongsTo(db.users,{
    foreignKey:'user_id',
    as: 'user'
})

module.exports =db