"use strict";
const { faker } = require("@faker-js/faker");

const posts = [
  {
    user_id: 1,
    sub_category_id: 1,
    name: "LOGO HOUSE ออกแบบโลโก้คุณภาพ",
    description:
      "สนใจออกแบบโลโก้สวยๆ มีคุณภาพ ในราคาที่เหมาะสม สามารถทักทายเข้ามาได้เลยนะครับ",
    instruction: JSON.stringify([
      "ลูกค้าสามารถสอบถามสิ่งที่ลูกค้าต้องการได้",
      "ออกแบบโลโก้แบบแรก",
      "พัฒนา และปรับแก้แบบ (สามารถทำได้ 5 ครั้ง)",
      "ส่งมอบงานขั้นสุดท้าย",
    ]),
    status: "APPROVE",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    user_id: 16,
    sub_category_id: 1,
    name: "ออกแบบ Logo อันดับ 1 ทันสมัยที่สุด",
    description:
      "Buttercup Graphic Design specializes in Graphic Design, Social Media, Digital Marketing & Brand Strategy to grow your business, audience and create long-lasting relationships.",
    instruction: JSON.stringify([
      "กำหนดรายละเอียด เกี่ยวกับข้อมูล ชื่อร้านค้า องค์กร หรือสินค้า ที่มาของแบรนด์",
      "กำหนด Mood and Tone อย่างน้อย 1 สีเพื่อจัดเซ็ทสี(ถ้ามีแบบผลงานตัวอย่างที่ชอบแนบมาให้ได้เลย)",
      "หลังจากออกแบบเสร็จ จะส่งไฟล์ให้ตรวจสอบ เพื่อ ดำเนินการแก้ไขจัดส่งไฟล์ ใหม่กลับไป เมื่อลูกค้าพอใจแล้วจะสามารถทำไฟล์ไฟนอลเพื่อส่งงานขั้นสุดท้าย",
      "หลังจบเสร็จกระบวน ทางเราจะส่งไฟล์งานขั้นสุดท้ายให้ลูกค้า หากไม่แน่ใจหรือมีข้อสงสัยในการบรีฟงานหรือตัวไฟล์งาน ทีมงานยินดีให้คำปรึกษาเรื่องการออกแบบและการนำไปใช้จริง",
    ]),
    status: "APPROVE",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    user_id: 1,
    sub_category_id: 7,
    name: "รับงานทำ Landing Page / Sale Page / Corporate Page",
    description:
      "รองรับทุกหน้าจออุปกรณ์ (Responsive) ด้วยภาษา HTML / CSS / Javascript / React",
    instruction: JSON.stringify([
      "กำหนดรายละเอียด (ไฟล์ PSD,Sketch) หากลูกค้าไม่มี Design สามารถบริฟให้ทางผมออกแบบให้ได้หรือมี Ref ให้ดู",
      "เริ่มงาน Coding ตาม Ref ที่ลูกค้าสั่ง ด้วยภาษา React / HTML / CSS / Javascript และทำ Responsive",
      "ส่งงานให้ลูกค้าดูจากโดเมนทดสอบของทางผมโดยจะส่ง link url ให้ลูกค้าตรวจสอบ",
      "หากลูกค้าพอใจ สามารถ Deploy ไปยัง Host , Domain ของลูกค้าที่ติดตังไว้ได้เลย",
    ]),
    status: "APPROVE",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    user_id: 2,
    sub_category_id: 9,
    name: "รับทำ Application ผ่าน React native ทั้ง IOS และ Android",
    description:
      "สามารถทำ Application ลง Store และ สอนการใช้งาน  หรือ แก้ไขงานที่เกี่ยวข้องกับงาน React native พัฒนาให้ได้ทั้ง iOS ,Android และ Web",
    instruction: JSON.stringify([
      "รับ Requirement ตามความต้องการของลูกค้า",
      "คำนวณราคาที่เหมาะสมตามระยะเวลาในการทำงาน ",
      "พัฒนา Mobile App ตาม Requirement",
      "ส่งส่วนของ QrCode เพื่อให้ลูกค้าเช็คงาน ถ้าลูกค้าต้องการให้แก้ไขตามขอบเขต(ไม่เพิ่มเติมจาก Requirement เดิม) จนกว่าจะพอใจ หรือครบตามกำหนดการแก้ไขงาน",
      "ส่งงานให้ลูกค้าเป็น apk, ipa, source code, หากต้องการให้อัพขึ้น Store (ลูกค้าต้องเป็นคนออกค่าใช้จ่ายทั้งหมดเอง)",
    ]),
    status: "APPROVE",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    user_id: 2,
    sub_category_id: 7,
    name: "รับจัดทำเว็บไซต์ด้วยทีมงานมืออาชีพ ออกแบบงานสวยโดนใจ ในราคาย่อมเยาว์",
    description:
      "ทำงานด้วยทีมงานมืออาชีพ งานสวย จบไว ไม่ทิ้งงาน หากให้ทำ Landing Page เริ่มต้น 5,000 บาท ขึ้นอยู่กับข้อมูลในหน้าเว็บไซต์ หน้าต่อไปคิดเพิ่ม หน้าละ 1,000 บาท สำหรับเว็บที่ต้องการทำหลายภาษา เพิ่มภาษาละ 4,000 บาท",
    instruction: JSON.stringify([
      "เว็บรองรับการแสดงผลในทุกหน้าจอ (Responsive)",
      "ทำ SEO เบื้องต้น",
      "ติด Code Google Analytics หรือ Facebook Pixel",
      "เชื่อมต่อ Social Media เช่น Facebook, Line ,Messenger",
      "ฟรี Domain Name  + Hosting 1 ปี ( มูลค่า 2,000 บาท )",
    ]),
    status: "APPROVE",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    user_id: 8,
    sub_category_id: 1,
    name: "Logo Design / ดีไซน์ให้ตรงใจคุณ",
    description:
      "สวัสดีค่ะคุณลูกค้าที่น่ารักทุกท่าน ฟรีแลนซ์ใจดียินดีให้คำปรึกษาและดีไซน์งานของคุณออกมาอย่างดีที่สุดค่ะ",
    instruction: JSON.stringify([
      "แจ้งไอเดียที่หรือ Requirement หรือสโคปงานที่ลูกค้าต้องการ",
      "คุยรายละเอียดเพิ่มเติมและเสนอราคางานออกแบบให้พิจารณา",
      "จัดส่งดราฟแรก 3 แบบให้พิจารณา สามารถ ปรับแก้ไขงานได้ 3 ครั้ง",
      "ถ้าลูกค้าพอใจในงานแล้ว จะสรุปงานพร้อมทั้งจัดส่งงานขั้นสุดท้ายให้คุณลูกค้าอนุมัติงาน",
      "ส่งงาน Final ไฟล์ที่ลูกค้าจะได้รับ .ai .PNG .JPG",
    ]),
    status: "APPROVE",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const max = 26;
const min = 7;
const maxSub = 42;
const minSub = 1;
const maxLoop = 15;

for (let i = 0; i < maxLoop; i++) {
  const post = {
    user_id: Math.ceil(Math.random() * (max - min) + min),
    sub_category_id: Math.ceil(Math.random() * (maxSub - minSub) + minSub),
    name: faker.lorem.words(),
    description: faker.lorem.sentence(),
    instruction: JSON.stringify([
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
    ]),
    status: "APPROVE",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  };
  posts.push(post);
}

// TODO: Create post for category Logo
for (let j = 0; j < 15; j++) {
  const postLogo = {
    user_id: Math.ceil(Math.random() * (max - min) + min),
    sub_category_id: 1,
    name: faker.lorem.words(),
    description: faker.lorem.sentence(),
    instruction: JSON.stringify([
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
    ]),
    status: "APPROVE",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  };
  posts.push(postLogo);
}

// TODO: Create post for category Web Develop
for (let k = 0; k < 3; k++) {
  const postWebDev = {
    user_id: Math.ceil(Math.random() * (max - min) + min),
    sub_category_id: 7,
    name: faker.lorem.words(),
    description: faker.lorem.sentence(),
    instruction: JSON.stringify([
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
    ]),
    status: "APPROVE",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  };
  posts.push(postWebDev);
}

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

    return await queryInterface.bulkInsert("posts", posts);
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
