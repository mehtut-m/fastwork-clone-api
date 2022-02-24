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
    await queryInterface.bulkInsert("order_details", [
      {
        order_id: 1,
        user_id: 2,
        submit_date: new Date(),
        comment: "ส่งงานแล้วนะครับ",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        user_id: 1,
        submit_date: new Date(),
        comment: "ขอแก้งานนิดหน่อยครับ",
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
    await queryInterface.bulkDelete("order_details", null, {});
  },
};
