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
        category_id: 1,
        name: "Logo",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        name: "วาดภาพประกอบ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        name: "ออกแบบ Character & Mascot",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        name: "Banner โฆษณา",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        name: "วาดแฟนอาร์ต",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        name: "อื่นๆ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 5,
        name: "Web Development",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 5,
        name: "Wordpress",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 5,
        name: "Mobile Application",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 5,
        name: "ทำโปรเจค IoT",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 5,
        name: "Chatbot",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 5,
        name: "อื่นๆ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 2,
        name: "ทำ SEO",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 2,
        name: "โปรโมทเพจ / เว็บ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 2,
        name: "เขียนรีวิว",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 2,
        name: "วิเคราะห์ดาต้า",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 2,
        name: "RP ประชาสัมพันธ์",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 2,
        name: "อื่นๆ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 3,
        name: "แปล ภาษา",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 3,
        name: "เขียนบทความ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 3,
        name: "พิสูจน์อักษร",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 3,
        name: "ล่าม",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 3,
        name: "อื่นๆ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 4,
        name: "ถ่ายและตัดต่อวิดีโอ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 4,
        name: "Photography",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 4,
        name: "Voice Over",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 4,
        name: "Animations",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 4,
        name: "พิธีกร MC",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 4,
        name: "นักร้อง/นักดนตรี",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 4,
        name: "อื่นๆ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 6,
        name: "การตลาด",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 6,
        name: "กฏหมาย",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 6,
        name: "ตรวจสอบรถมือสอง",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 6,
        name: "จดทะเบียนการค้าบริษัท",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 6,
        name: "ตรวจรับบ้านและคอนโด",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 6,
        name: "ดูดวง",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 6,
        name: "นักจิตวิทยา",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 6,
        name: "อื่นๆ",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 7,
        name: "แอดมินดูแลเพจ เว็บไซต์ และร้านค้าออนไลน์",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 7,
        name: "เปิดร้านค้าออนไลน์และลงสินค้า",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 7,
        name: "Callcenter / Telesale",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 7,
        name: "พนักงานขาย",
        image: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 7,
        name: "อื่นๆ",
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
