"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("packages", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      post_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "posts",
          },
          key: "id",
        },
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        // allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.STRING(1234),
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      duration: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      revise: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("packages");
  },
};
