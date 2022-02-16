"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("addresses", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      sub_district: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      postcode: {
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
    await queryInterface.dropTable("addresses");
  },
};
