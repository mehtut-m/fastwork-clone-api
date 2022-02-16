"use strict";

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
    return await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Graphic & Design",
        },
        {
          name: "การตลาดและโฆษณา",
        },
        {
          name: "เขียนและแปลภาษา",
        },
        {
          name: "ภาพและเสียง",
        },
        {
          name: "Web & Programming",
        },
        {
          name: "ปรึกษาแนะนำ",
        },
        {
          name: "จัดการร้านค้าออนไลน์",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("categories", null, {});
  },
};
