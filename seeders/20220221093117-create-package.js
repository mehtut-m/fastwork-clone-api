"use strict";

const { faker } = require("@faker-js/faker");

const data = [
  {
    post_id: 1,
    name: "ออกแบบ LOGO HOUSE Package bronze",
    description: "มีการออกแบบชั้นงานให้เลือก 3 ชิ้น",
    price: 2000,
    duration: 3,
    revise: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 1,
    name: "ออกแบบ LOGO HOUSE Package Silver",
    description: "มีการออกแบบชั้นงานให้เลือก 5 ชิ้น",
    price: 3000,
    duration: 5,
    revise: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 1,
    name: "ออกแบบ LOGO+CL Package gold",
    description: "มีการออกแบบชั้นงานให้เลือก+CL",
    price: 10000,
    duration: 5,
    revise: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 2,
    name: "BASIC : Personal/ startup business",
    description: "ออกแบบโลโก้ให้เลือก 3 แบบ",
    price: 4500,
    duration: 3,
    revise: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 2,
    name: "Medium : Unlimited revisions.",
    description: "ออกแบบโลโก้ให้เลือก 5 แบบ Profile Picture Facebook and Cover",
    price: 5600,
    duration: 3,
    revise: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 2,
    name: "Advance : Branding Professional Business",
    description:
      "ออกแบบโลโก้ให้เลือก 5 แบบ และมี Brandbook ให้ 1 เล่ม ใน Brandbook มี 8 หน้า",
    price: 18000,
    duration: 7,
    revise: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 3,
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
    post_id: 3,
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
    post_id: 4,
    name: "รับ ipa apk source code และระบบหลังบ้าน",
    description:
      "ส่งมอบงานให้ลูกค้า ด้วยไฟล์ apk, ipa และ source code + Backend โดยแอพจะดึงข้อมูลจากระบบหลังบ้าน",
    price: 8000,
    duration: 7,
    revise: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    name: "Salepage",
    description: "เว็บไซต์หน้าเดียว หรือ Salepage",
    price: 5000,
    duration: 7,
    revise: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    name: "Premium Website",
    description:
      "ออกแบบและจัดทำเว็บไซต์ใหม่ จำนวน 5 หน้าเพจ - ฟรี! Domain+Hosting ระยะเวลา 1 ปี - สอนอัพเดตและแก้ไขเว็บไซด์เบื้องต้น",
    price: 9900,
    duration: 10,
    revise: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 6,
    name: "Package [♡Logo♡]",
    description:
      "- ออกแบบโลโก้ตาม Concept 3 รูปแบบ ให้ลูกค้าพิจารณาแบบ สามารถ Develop ได้ 1 ครั้ง - หลังจาก Develop สามารถแก้ไขได้ 3 ครั้ง (ครั้งถัดไป +100 ต่อครั้ง) - ไฟล์ที่ลูกค้าจะได้รับ .ai .PNG .JPG ( .ai สำหรับแก้ไขเพิ่มเติม หรือนำไปจัดทำ Artwork ในส่วนงานอื่นๆ .JPG สำหรับเป็นไฟล์ภาพโปรไฟล์ .PNG ที่มีพื้นหลังโปร่งใส) ♡ กรณีปรับโทนสีเพิ่มเติม +เพิ่ม 300.- ต่อไฟล์ ♡ กรณีเพิ่มไฟล์ตรายาง [ขาว-ดำ] หรือ รับ 2 ภาษา+เพิ่ม 500.- ♡ กรณีต้องการ 2 รูปแบบ +เพิ่ม 700.- ♡ กรณีปรับเปลี่ยน Concept +เพิ่ม 1,000.-",
    price: 1800,
    duration: 3,
    revise: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 6,
    name: "Logo + แพ็กเกจเสริม [ไฟล์ตรายาง]",
    description:
      "♡ ไฟล์ตรายาง ได้รับไฟล์ .ai สำหรับแก้ไขเพิ่มเติม หรือนำไปจัดทำ Artwork ในส่วนงานอื่นๆ, .PNG ที่มีพื้นหลังโปร่งใส) รายละเอียดราคาเพิ่มเติม แพ็กเกจเสริม ♡ FB COVER (ปกแฟนเพจ) +เพิ่ม 500.- ♡ Profile (ภาพโปรไฟล์) +เพิ่ม 500.- ♡ Ads.Online (1 ภาพ) +เพิ่ม 700.- ♡ ออกแบบฉลาก/สติ๊กเกอร์/ซอง 1 แบบ +เพิ่ม 990.- ♡ Infographic 1 แบบ +เพิ่ม 1,000.- ♡ แผนที่ 1 แบบ +เพิ่ม 1,000.- ♡ กล่องบรรจุภัณฑ์ 1 แบบ +เพิ่ม 1,900.-",
    price: 2300,
    duration: 3,
    revise: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 6,
    name: "Logo + แพ็กเกจเสริม [ภาษาไทย/อังกฤษ]",
    description:
      "♡ Logo เพิ่มการปรับภาษา ไทย/อังกฤษ ได้รับไฟล์ .ai สำหรับแก้ไขเพิ่มเติม หรือนำไปจัดทำ Artwork ในส่วนงานอื่นๆ, .PNG ที่มีพื้นหลังโปร่งใส)",
    price: 2300,
    duration: 3,
    revise: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const minPostId = 7;

for (let i = minPostId; i < 38; i++) {
  for (let j = 0; j < 3; j++) {
    const gen = {
      post_id: i + j,
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      price: (Math.random() * (10000 - 2500) + 2500).toFixed(0),
      duration: (Math.random() * (10 - 3) + 3).toFixed(0),
      revise: (Math.random() * (8 - 2) + 2).toFixed(0),
      created_at: new Date(),
      updated_at: new Date(),
    };
    data.push(gen);
  }
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
    return await queryInterface.bulkInsert("packages", data);
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
