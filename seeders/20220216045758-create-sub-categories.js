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
        name: "Logo",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: "1",
        name: "วาดภาพประกอบ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: "1",
        name: "ออกแบบ Character & Mascot",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: "1",
        name: "Banner โฆษณา",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: "1",
        name: "วาดแฟนอาร์ต",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: "5",
        name: "Web Development",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: "5",
        name: "Wordpress",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: "5",
        name: "Mobile Application",
        image: null,
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
    return await queryInterface.bulkDelete("sub_categories", null, {});
  },
};
