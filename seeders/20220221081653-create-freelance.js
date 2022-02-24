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
    return await queryInterface.bulkInsert("freelance_infos", [
      {
        user_id: "1",
        first_name: "Jill",
        last_name: "Royce",
        display_name: "ebony and ivory",
        profile_desc:
          "ฉันชื่อจิวเรียบจบ Fine Art ศิลปกรรมออกแบบนิเทศศิลป์ ประสบการณ์ทำงานมากกว่า 10 ปี ปัจจุบันทำอาชีพนักออกแบบอัตลักษณ์, บรรจุภัณฑ์, ศึกษาต่ออยู่ที่แคนาดาและเป็นเจ้าของธุรกิจ ecommerce I have over 10 years of experience as a creative designer specializing in branding, CI & product packaging design.",
        citizen_card_no: "1009954839125",
        citizen_address_id: "1",
        current_address_id: "2",
        image_with_card: "https://picsum.photos/id/1/200/300",
        card_image: "https://picsum.photos/id/2/200/300",
        bank_id: "1",
        bank_account_no: "222312234",
        bank_account_image: "https://picsum.photos/id/3/200/300",
        status: "APPROVE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: "2",
        first_name: "Bella",
        last_name: "Valentine",
        display_name: "Coke Zero SUGAR",
        profile_desc:
          "เป็นพนักงาน Mobile Dev ถนัดการเขียน React native Cross-platform ปัจจุบันเคยปล่อย Application ไปบ้างแล้ว",
        citizen_card_no: "1119647328193",
        citizen_address_id: "3",
        current_address_id: "3",
        image_with_card: "https://picsum.photos/id/4/200/300",
        card_image: "https://picsum.photos/id/5/200/300",
        bank_id: "2",
        bank_account_no: "222356164",
        bank_account_image: "https://picsum.photos/id/6/200/300",
        status: "APPROVE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        first_name: "Sage",
        last_name: "Bergrin",
        display_name: "Ma Ma Ma",
        profile_desc:
          "บัณฑิตคณะสถาปัตยกรรมศาสตร์สาขาภูมิสถาปัตยกรรม ถนัดการใช้ Photoshop, Illustrator และ Procreate รับงานวาดรูปการ์ตูน, วาดภาพประกอบหนังสือ, ปกนิยาย, โปสการ์ด, เพจ, fanart ฯลฯ รับตัดต่อรูป ตกแต่ง perspective ออกแบบ Infographic สามารถสอบถามได้ก่อนค่ะ",
        citizen_card_no: "1658953328365",
        citizen_address_id: 4,
        current_address_id: 4,
        image_with_card: "https://picsum.photos/id/7/200/300",
        card_image: "https://picsum.photos/id/8/200/300",
        bank_id: 3,
        bank_account_no: "237591842",
        bank_account_image: "https://picsum.photos/id/9/200/300",
        status: "SUBMIT",
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
    return await queryInterface.bulkDelete("freelance_infos", null, {});
  },
};
