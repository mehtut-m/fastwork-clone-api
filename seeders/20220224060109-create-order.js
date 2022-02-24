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
    await queryInterface.bulkInsert("orders", [
      {
        buyer_id: 1,
        seller_id: 2,
        post_id: 3,
        package_id: 8,
        status: "WORKING",
        payment_id: new Date().getTime() + 1,
        payment_date: new Date(),
        complete_date: null,
        deadline_date: new Date(new Date().setDate(new Date().getDate() + 8)),
        revise_count: 3,
        requirement: "ต้องการงานด่วนมาก",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        buyer_id: 3,
        seller_id: 2,
        post_id: 3,
        package_id: 8,
        status: "REVIEW",
        payment_id: new Date().getTime() + 2,
        payment_date: new Date(),
        complete_date: null,
        deadline_date: new Date(new Date().setDate(new Date().getDate() + 2)),
        revise_count: 3,
        requirement: "ขอ responsive ด้วยนะครับ",
        created_at: new Date(new Date().setDate(new Date().getDate() - 6)),
        updated_at: new Date(),
      },
      {
        buyer_id: 4,
        seller_id: 2,
        post_id: 3,
        package_id: 8,
        status: "COMPLETE",
        payment_id: new Date().getTime() + 3,
        payment_date: new Date(),
        complete_date: new Date(new Date().setDate(new Date().getDate() - 1)),
        deadline_date: new Date(new Date().setDate(new Date().getDate())),
        revise_count: 3,
        requirement: "เริ่มงานได้เลยนะครับ งานรีบ",
        created_at: new Date(new Date().setDate(new Date().getDate() - 8)),
        updated_at: new Date(),
      },
      {
        buyer_id: 5,
        seller_id: 1,
        post_id: 1,
        package_id: 2,
        status: "WORKING",
        payment_id: new Date().getTime() + 4,
        payment_date: new Date(),
        complete_date: null,
        deadline_date: new Date(new Date().setDate(new Date().getDate() + 5)),
        revise_count: 5,
        requirement: "ขอ LOGO ขนาด 300 * 400 นะครับ",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        buyer_id: 3,
        seller_id: 1,
        post_id: 2,
        package_id: 1,
        status: "REVIEW",
        payment_id: new Date().getTime() + 5,
        payment_date: new Date(),
        complete_date: null,
        deadline_date: new Date(new Date().setDate(new Date().getDate() + 1)),
        revise_count: 5,
        requirement: "ออกแบบ LOGO CAT ให้หน่อยครับ",
        created_at: new Date(new Date().setDate(new Date().getDate() - 2)),
        updated_at: new Date(),
      },
      {
        buyer_id: 4,
        seller_id: 1,
        post_id: 2,
        package_id: 1,
        status: "REVIEW",
        payment_id: new Date().getTime() + 6,
        payment_date: new Date(),
        complete_date: null,
        deadline_date: new Date(new Date().setDate(new Date().getDate() + 2)),
        revise_count: 5,
        requirement: "ขอภายใน 3 วันนะครับ",
        created_at: new Date(new Date().setDate(new Date().getDate() - 1)),
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
    await queryInterface.bulkDelete("orders", null, {});
  },
};
