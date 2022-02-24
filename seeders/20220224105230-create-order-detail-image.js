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
    await queryInterface.bulkInsert("order_detail_images", [
      {
        order_detail_id: 1,
        url: "https://picsum.photos/id/15/800/500",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_detail_id: 1,
        url: "https://picsum.photos/id/25/800/500",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_detail_id: 1,
        url: "https://picsum.photos/id/35/800/500",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_detail_id: 1,
        url: "https://picsum.photos/id/45/800/500",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_detail_id: 1,
        url: "https://picsum.photos/id/55/800/500",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_detail_id: 2,
        url: "https://picsum.photos/id/65/800/500",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_detail_id: 2,
        url: "https://picsum.photos/id/75/800/500",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_detail_id: 2,
        url: "https://picsum.photos/id/85/800/500",
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
    await queryInterface.bulkDelete("order_detail_images", null, {});
  },
};
