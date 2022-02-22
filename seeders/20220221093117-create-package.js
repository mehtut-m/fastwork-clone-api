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
    return await queryInterface.bulkInsert("packages", [
      {
        post_id: "1",
        name: "ออกแบบ LOGO 3 ตัวเลือก",
        description: "ออกแบบชึ้นงานให้เลือก 3 ชิ้น",
        price: 2000,
        duration: 3,
        revise: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        name: "ออกแบบ LOGO 5 ตัวเลือก",
        description: "ออกแบบชึ้นงานให้เลือก 5 ชิ้น",
        price: 3000,
        duration: 5,
        revise: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "1",
        name: "ออกแบบ LOGO+CL",
        description: "ออกแบบชึ้นงานให้+CL",
        price: 10000,
        duration: 5,
        revise: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        name: "HOT BASIC : Personal/ startup business",
        description: "ออกแบบโลโก้ 3 แบบ",
        price: 4500,
        duration: 3,
        revise: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        name: "GOLD! : Unlimited revisions.",
        description: "ออกแบบโลโก้ 5 แบบ Profile Picture Facebook and Cover",
        price: 5600,
        duration: 3,
        revise: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "2",
        name: "DIAMOND! : Branding Professional Business",
        description:
          "ออกแบบโลโก้ 5 แบบ Brandbook 1 เล่ม Business Card Profile Picture-Cover letterhead- Envelope",
        price: 18000,
        duration: 7,
        revise: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        name: "ตัดไฟล์จากดีไซน์ที่ลูกค้ามีให้เป็นหน้า HTML / CSS / Javascript / React",
        description:
          "- Domain ทดสอบเพื่อส่ง URL ให้ลูกค้าดูงานบน Online ผ่าน Browser - File Source Code ทั้งหมด (ไฟล์ build ,development) - File Asset (Image / Font)",
        price: 2500,
        duration: 5,
        revise: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "3",
        name: "ออกแบบหน้าเว็บ + พร้อมตัดหน้า HTML / CSS / Javascript / React",
        description:
          "- Domain ทดสอบเพื่อส่ง URL ให้ลูกค้าดูงานบน Online ผ่าน Browser - File Source Code ทั้งหมด (ไฟล์ build ,development) - File Asset (Image / Font) - File Artwork",
        price: 5000,
        duration: 8,
        revise: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        post_id: "4",
        name: "รับ ipa apk source code และระบบหลังบ้าน",
        description:
          "ส่งมอบงานให้ลูกค้า ด้วยไฟล์ apk, ipa และ source code + Backend โดยแอพจะดึงข้อมูลจากระบบหลังบ้าน",
        price: 8000,
        duration: 7,
        revise: 5,
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
    return await queryInterface.bulkDelete("packages", null, {});
  },
};
