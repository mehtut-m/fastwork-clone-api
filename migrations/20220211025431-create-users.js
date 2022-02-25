"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      facebook_id: {
        type: Sequelize.DataTypes.STRING,
      },
      google_id: {
        type: Sequelize.DataTypes.STRING,
      },
      telephone_no: {
        type: Sequelize.DataTypes.STRING,
      },
      date_of_birth: {
        type: Sequelize.DataTypes.DATE,
      },
      profile_image: {
        type: Sequelize.DataTypes.STRING,
      },
      freelance_info_id: {
        type: Sequelize.DataTypes.INTEGER,
        unique: true,
      },
      role: {
        type: Sequelize.DataTypes.ENUM("USER", "FREELANCE", "ADMIN"),
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
    await queryInterface.dropTable("users");
  },
};
