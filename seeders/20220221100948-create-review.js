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
    return await queryInterface.bulkInsert("reviews", [
      {
        user_id: 5,
        post_id: 1,
        title: "ทำเร็วมาก ชอบงานมาก",
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 4,
        post_id: 1,
        title:
          "ทำงานได้ต้องตาม โปรเจคงานที่ต้องการ มีความยืดหยุ่นในการแก้ไขงาน",
        rating: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        post_id: 3,
        title:
          "ถ้างานมีปัญหาหรือมีคำถาม สามารถติดต่อและได้รับคำตอบรวดเร็วดีค่ะ",
        rating: "4.5",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        post_id: 3,
        title:
          "เข้าใจงาน มีความยืดหยุ่นในหลายๆด้าน สามารถทำงานได้ตรงตามความต้องการ ทำงานรวดเร็ว",
        rating: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        post_id: 4,
        title: null,
        rating: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 10,
        post_id: 5,
        title: "ทำงานไวครับ",
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 15,
        post_id: 5,
        title: "แก้งานไวมาก",
        rating: 5,
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
    return await queryInterface.bulkDelete("reviews", null, {});
  },
};
