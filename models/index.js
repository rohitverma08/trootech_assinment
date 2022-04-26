const config = require("../dbConfig/config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: 0,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync()  
// Force sync all models 
// It will drop the table first  
// and re-create it afterwards 
sequelize.sync({force:false})
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product_categories = require("./product_categories")(sequelize, Sequelize);
db.products = require("./products")(sequelize, Sequelize);

sequelize.models.products.belongsTo(sequelize.models.product_categories, {
    foreignKey: "category_id",
    targetKey: "id",
});

module.exports = db;