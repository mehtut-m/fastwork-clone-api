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
    return await queryInterface.bulkInsert("sub_categories", [
      {
        category_id: "1",
        name: "Logo Design ดีไซน์ให้ตรงใจ",
        image: null,
      },
      {
        category_id: "1",
        name: "Logo HOUSE บ้านหลังใหญ่",
        image: null,
      },
      {
        category_id: "5",
        name: "รับทำ Landing Page",
        image: null,
      },
      {
        category_id: "5",
        name: "รับทำ WEBSITE",
        image: null,
      },
      {
        category_id: "5",
        name: "รับทำ Web Application รองรับ Responsive",
        image: null,
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
    return await queryInterface.bulkDelete("sub_categories", null, {});
  },
};
