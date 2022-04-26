module.exports = (sequelize, Sequelize) => {
    const products = sequelize.define("products", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM,
            values: ["active", "deactive"],
            allowNull: false,
            defaultValue: 'active'
        },
        created_at: {
            type: Sequelize.DATE(3),
            allowNull: true
        },
        updated_at: {
            type: Sequelize.DATE(3),
            allowNull: true
        },
        deleted_at: {
            type: Sequelize.DATE(3),
            allowNull: true
        },
    },
        {
            engine: 'InnoDB',
            charset: 'utf8mb4',
            paranoid: true,
            deletedAt: `deleted_at`,
            createdAt: `created_at`,
            updatedAt: `updated_at`,
            timestamps: true,
        });
    return products;
};