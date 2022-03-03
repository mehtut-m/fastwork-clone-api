"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("posts", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
      },
      sub_category_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "sub_categories",
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
      instruction: {
        type: Sequelize.DataTypes.TEXT,
      },
      status: {
        type: Sequelize.DataTypes.ENUM("DRAFT", "SUBMIT", "REJECT", "APPROVE"),
        allowNull: false,
      },
      is_active: {
        type: Sequelize.DataTypes.BOOLEAN,
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
    await queryInterface.dropTable("posts");
  },
};
