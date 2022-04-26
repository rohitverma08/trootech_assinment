module.exports = (sequelize, Sequelize) => {
    const product_categories = sequelize.define("product_categories", {
        name: {
            type: Sequelize.STRING,
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
    return product_categories;
};