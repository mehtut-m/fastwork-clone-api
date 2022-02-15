"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("users", [
      {
        first_name: "Jill",
        last_name: "Royce",
        email: "Jill@gmail.com",
        password: bcrypt.hashSync("Jillpass", 12),
        role: "USER",
        display_name: "Jill",
      },
      {
        first_name: "Bella",
        last_name: "Valentine",
        email: "Bella@gmail.com",
        password: bcrypt.hashSync("Bellapass", 12),
        role: "USER",
        display_name: "Bella",
      },
      {
        first_name: "Sage",
        last_name: "Bergrin",
        email: "Sage@gmail.com",
        password: bcrypt.hashSync("Sagepass", 12),
        role: "USER",
        display_name: "Sage",
      },
      {
        first_name: "Josy",
        last_name: "Redsen",
        email: "Josy@gmail.com",
        password: bcrypt.hashSync("Josypass", 12),
        role: "USER",
        display_name: "Josy",
      },
      {
        first_name: "Maya",
        last_name: "Mary",
        email: "Maya@gmail.com",
        password: bcrypt.hashSync("Mayapass", 12),
        role: "USER",
        display_name: "Maya",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("users", null, {});
  },
};
