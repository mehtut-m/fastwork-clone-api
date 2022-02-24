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
        url: "https://picsum.photos/id/2/500/300",
        order: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        url: "https://picsum.photos/id/3/500/300",
        order: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        url: "https://picsum.photos/id/4/500/300",
        order: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        url: "https://picsum.photos/id/5/500/300",
        order: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        url: "https://picsum.photos/id/6/500/300",
        order: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        url: "https://picsum.photos/id/7/500/300",
        order: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/8/500/300",
        order: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/9/500/300",
        order: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/10/500/300",
        order: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/11/500/300",
        order: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/12/500/300",
        order: "5",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        url: "https://picsum.photos/id/13/500/300",
        order: "6",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/14/500/300",
        order: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/15/500/300",
        order: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/16/500/300",
        order: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/17/500/300",
        order: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/18/500/300",
        order: "5",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/19/500/300",
        order: "6",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/20/500/300",
        order: "7",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/21/500/300",
        order: "8",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        url: "https://picsum.photos/id/22/500/300",
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
