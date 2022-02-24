"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("freelance_infos", {
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
      first_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      display_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      profile_desc: {
        type: Sequelize.DataTypes.STRING(1234),
      },
      citizen_card_no: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      citizen_address_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "addresses",
          },
          key: "id",
        },
      },
      current_address_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "addresses",
          },
          key: "id",
        },
      },
      image_with_card: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      card_image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      bank_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "banks",
          },
          key: "id",
        },
      },
      bank_account_no: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      bank_account_image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.ENUM(
          "PENDING",
          "SUBMIT",
          "APPROVE",
          "REJECT"
        ),
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
    await queryInterface.dropTable("freelance_infos");
  },
};
