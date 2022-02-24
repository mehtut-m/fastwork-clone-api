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
    return await queryInterface.bulkInsert("post_images", [
      {
        post_id: "1",
        url: "https://picsum.photos/id/1/500/300",
        order: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        url: "https://picsum.photos/id/21/500/300",
        order: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        url: "https://picsum.photos/id/31/500/300",
        order: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        url: "https://picsum.photos/id/41/500/300",
        order: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        url: "https://picsum.photos/id/51/500/300",
        order: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        url: "https://picsum.photos/id/61/500/300",
        order: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        url: "https://picsum.photos/id/71/500/300",
        order: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/81/500/300",
        order: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/91/500/300",
        order: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/101/500/300",
        order: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/111/500/300",
        order: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/121/500/300",
        order: "5",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/131/500/300",
        order: "6",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/141/500/300",
        order: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/151/500/300",
        order: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/161/500/300",
        order: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/171/500/300",
        order: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/181/500/300",
        order: "5",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/191/500/300",
        order: "6",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/201/500/300",
        order: "7",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/211/500/300",
        order: "8",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/221/500/300",
        order: "9",
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
    return await queryInterface.bulkDelete("post_images", null, {});
  },
};
