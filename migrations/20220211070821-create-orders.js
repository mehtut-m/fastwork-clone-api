"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("orders", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      buyer_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          as: "buyer",
          model: {
            tableName: "users",
          },
          key: "id",
        },
      },
      seller_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          as: "seller",
          model: {
            tableName: "users",
          },
          key: "id",
        },
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
      package_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "packages",
          },
          key: "id",
        },
      },
      status: {
        type: Sequelize.DataTypes.ENUM("WORKING", "REVIEW", "COMPLETE"),
        allowNull: false,
      },
      payment_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      payment_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      complete_date: {
        type: Sequelize.DataTypes.DATE,
      },
      deadline_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      revise_count: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      requirement: {
        type: Sequelize.DataTypes.TEXT,
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
    await queryInterface.dropTable("orders");
  },
};
