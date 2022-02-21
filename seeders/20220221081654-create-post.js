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
    return await queryInterface.bulkInsert("posts", [
      {
        user_id: "1",
        sub_category_id: "1",
        name: "LOGO HOUSE บ้านหลังใหญ่ของโลโก้คุณภาพ",
        description:
          "สนใจออกแบบโลโก้สวยๆ มีคุณภาพ ในราคาที่เหมาะสม สามารถทักทายเข้ามาได้เลยนะครับ",
        instruction: [
          "สอบถามสิ่งที่ลูกค้าต้องการ",
          "ออกแบบโลโก้แบบแรก",
          "พัฒนา และปรับแก้แบบ (สามารถทำได้ 5 ครั้ง)",
          "ส่งมอบงานขั้นสุดท้าย",
        ],
        status: "APPROVE",
        is_active: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: "1",
        sub_category_id: "1",
        name: "Professional Signature Logo อันดับ 1 ทันสมัยที่สุด",
        description:
          "Buttercup Graphic Design specializes in Graphic Design, Social Media, Digital Marketing & Brand Strategy to grow your business, audience and create long-lasting relationships.",
        instruction: [
          "กำหนดรายละเอียดสั้นๆ เกี่ยวกับข้อมูล ชื่อร้านค้า องค์กร หรือสินค้า ที่มาของแบรนด์",
          "กำหนด Mood and Tone อย่างน้อย 1 สีเพื่อจัดเซ็ทสี(ถ้าลูกค้ามีแบบผลงานตัวอย่างที่ชอบแนบมาให้ได้เลย)",
          "หลังจากออกแบบเสร็จ จะส่งไฟล์ให้ลูกค้าได้ตรวจสอบเลือกแบบและดำเนินการแก้ไข ดำเนินการแก้ไขจัดส่งไฟล์ ใหม่กลับไป เมื่อลูกค้าพอใจแล้วจะสามารถทำไฟล์ไฟนอลเพื่อส่งงานขั้นสุดท้าย",
          "หลังจบเสร็จกระบวนการออกแบบ ทางเราจะส่งไฟล์งานขั้นสุดท้ายให้ลูกค้า หากไม่แน่ใจหรือมีข้อสงสัยในการบรีฟงานหรือตัวไฟล์งาน รับไฟล์งานหรือดาวน์โหลดไฟล์ นิงค์และทีมงานยินดีให้คำปรึกษาเรื่องการออกแบบและการนำไปใช้จริง",
        ],
        status: "DRAFT",
        is_active: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: "2",
        sub_category_id: "6",
        name: "รับทำ Landing Page / Sale Page / Corporate Page",
        description:
          "Landing Page , Sale Page , Corporate Page รองรับทุกหน้าจออุปกรณ์ (Responsive) ด้วยภาษา HTML / CSS / Javascript / React  ตัดไฟล์ PSD เป็นหน้า HTML หรือ React เว็บเป็นมิตรกับ SEO ",
        inflection: [
          "รับบริฟจากลูกค้า (ไฟล์ PSD,Sketch) หากลูกค้าไม่มี Design สามารถบริฟให้ทางผมออกแบบให้ได้หรือมี Ref ให้ดู",
          "เริ่มงาน Coding ตาม Ref ที่ลูกค้าสั่ง ด้วยภาษา React / HTML / CSS / Javascript เว็บที่ได้จะรองรับทุกขนาดหน้าจอ Responsive",
          "ส่งงานให้ลูกค้าดูจากโดเมนทดสอบของทางผมโดยจะส่ง link url ให้ลูกค้าตรวจสอบผ่าน chat ในระบบ",
          "หากลูกค้าพอใจในเว็บที่สร้างเสร็จแล้ว สามารถ Deploy ไปยัง Host , Domain ของลูกค้าที่ติดตังไว้ได้เลย",
        ],
        status: "APPROVE",
        is_active: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: "2",
        sub_category_id: "8",
        name: "พัฒนา Application ผ่าน React native เป็นทั้ง IOS และ Android",
        description:
          "สามารถ Application ลง Store และ สามารถสอนการใช้งาน วิธีการใช้แนะนำ หรือ แก้ไขงานที่เกี่ยวข้องกับงาน React native พัฒนาให้ได้ทั้ง iOS ,Android และ Web",
        inflection: [
          "รับขอบเขตงาน กำหนด Requirement ตามความต้องการของลูกค้า",
          "คำนวณราคาตามระยะเวลาในการทำงาน",
          "พัฒนา Mobile App",
          "ส่งส่วนของ QrCode ให้ลูกค้าเช็คงานก่อน จากนั้นทำการแก้ไขตาม ขอบเขต(ไม่เพิ่มเติมจาก Requirement เดิม",
          "ส่งงานให้ลูกค้าเป็น apk, ipa, source code, หากต้องการให้อัพขึ้น Store (ลูกค้าต้องเป็นคนออกค่าใช้จ่ายทั้งหมดเอง)",
        ],
        status: "APPROVE",
        is_active: "1",
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
    return await queryInterface.bulkDelete("posts", null, {});
  },
};
