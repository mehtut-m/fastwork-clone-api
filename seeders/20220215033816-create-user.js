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
        role: "FREELANCE",
        freelance_info_id: 1,
        telephone_no: "0931448634",
        date_of_birth: new Date("1996-11-11"),
        profile_image: "https://picsum.photos/id/11/300/300",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Bella",
        last_name: "Valentine",
        email: "Bella@gmail.com",
        password: bcrypt.hashSync("Bellapass", 12),
        role: "FREELANCE",
        freelance_info_id: 2,
        telephone_no: "0856349411",
        date_of_birth: new Date("1990-12-11"),
        profile_image: "https://picsum.photos/id/22/300/300",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Sage",
        last_name: "Bergrin",
        email: "Sage@gmail.com",
        password: bcrypt.hashSync("Sagepass", 12),
        role: "USER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Josy",
        last_name: "Redsen",
        email: "Josy@gmail.com",
        password: bcrypt.hashSync("Josypass", 12),
        role: "USER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Maya",
        last_name: "Mary",
        email: "Maya@gmail.com",
        password: bcrypt.hashSync("Mayapass", 12),
        role: "USER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Admin",
        last_name: "Id",
        email: "Admin@gmail.com",
        password: bcrypt.hashSync("Adminpass", 12),
        role: "ADMIN",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Williams",
        last_name: "Carl",
        email: "Williams@gmail.com",
        password: bcrypt.hashSync("Williamspass", 12),
        role: "FREELANCE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Morgan",
        last_name: "Leon",
        email: "Morgan@gmail.com",
        password: bcrypt.hashSync("Morganpass", 12),
        role: "FREELANCE",
        created_at: new Date(),
        updated_at: new Date(),
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
