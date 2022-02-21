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
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/500/300",
        order: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/500/300",
        order: null,
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
