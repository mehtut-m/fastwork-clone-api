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
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "การตลาดและโฆษณา",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "เขียนและแปลภาษา",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "ภาพและเสียง",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Web & Programming",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "ปรึกษาแนะนำ",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "จัดการร้านค้าออนไลน์",
          created_at: new Date(),
          updated_at: new Date(),
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
