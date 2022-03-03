"use strict";
const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");

const users = [
  {
    first_name: "Jill",
    last_name: "Royce",
    email: "Jill@gmail.com",
    password: bcrypt.hashSync("Jillpass", 12),
    role: "FREELANCE",
    freelance_info_id: 1,
    telephone_no: "0931448634",
    date_of_birth: new Date("1996-11-11"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Bella",
    last_name: "Valentine",
    email: "Bella@gmail.com",
    password: bcrypt.hashSync("Bellapass", 12),
    role: "FREELANCE",
    freelance_info_id: 2,
    telephone_no: "0856349411",
    date_of_birth: new Date("1990-12-11"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Sage",
    last_name: "Bergrin",
    email: "Sage@gmail.com",
    password: bcrypt.hashSync("Sagepass", 12),
    role: "USER",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Josy",
    last_name: "Redsen",
    email: "Josy@gmail.com",
    password: bcrypt.hashSync("Josypass", 12),
    role: "USER",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Maya",
    last_name: "Mary",
    email: "Maya@gmail.com",
    password: bcrypt.hashSync("Mayapass", 12),
    role: "USER",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Admin",
    last_name: "Id",
    email: "Admin@gmail.com",
    password: bcrypt.hashSync("Adminpass", 12),
    role: "ADMIN",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Williams",
    last_name: "Carl",
    email: "Williams@gmail.com",
    password: bcrypt.hashSync("Williamspass", 12),
    role: "FREELANCE",
    freelance_info_id: 4,
    telephone_no: "0857381945",
    date_of_birth: new Date("1992-4-29"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Morgan",
    last_name: "Leon",
    email: "Morgan@gmail.com",
    password: bcrypt.hashSync("Morganpass", 12),
    role: "FREELANCE",
    freelance_info_id: 5,
    telephone_no: "0951851851",
    date_of_birth: new Date("1990-1-27"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Ryan",
    last_name: "Denisa",
    email: "Ryan@gmail.com",
    password: bcrypt.hashSync("Ryanpass", 12),
    role: "FREELANCE",
    freelance_info_id: 6,
    telephone_no: "0945188412",
    date_of_birth: new Date("1987-8-10"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Watson",
    last_name: "Pavlina",
    email: "Watson@gmail.com",
    password: bcrypt.hashSync("Watsonpass", 12),
    role: "FREELANCE",
    freelance_info_id: 7,
    telephone_no: "0867871324",
    date_of_birth: new Date("1993-10-14"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Vitoria",
    last_name: "Kennedy",
    email: "Vitoria@gmail.com",
    password: bcrypt.hashSync("Vitoriapass", 12),
    role: "FREELANCE",
    freelance_info_id: 8,
    telephone_no: "0956515892",
    date_of_birth: new Date("1995-12-12"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Martina",
    last_name: "Andrea",
    email: "Martina@gmail.com",
    password: bcrypt.hashSync("Martinapass", 12),
    role: "FREELANCE",
    freelance_info_id: 9,
    telephone_no: "0899234192",
    date_of_birth: new Date("1991-2-21"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Rose",
    last_name: "Stephen",
    email: "Rose@gmail.com",
    password: bcrypt.hashSync("Rosepass", 12),
    role: "FREELANCE",
    freelance_info_id: 10,
    telephone_no: "0923441852",
    date_of_birth: new Date("1992-9-21"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Morris",
    last_name: "Wilma",
    email: "Morris@gmail.com",
    password: bcrypt.hashSync("Morrispass", 12),
    role: "FREELANCE",
    freelance_info_id: 11,
    telephone_no: "0877823149",
    date_of_birth: new Date("1996-2-23"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Davis",
    last_name: "Victor",
    email: "Davis@gmail.com",
    password: bcrypt.hashSync("Davispass", 12),
    role: "FREELANCE",
    freelance_info_id: 12,
    telephone_no: "0945188412",
    date_of_birth: new Date("1987-5-15"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Riley",
    last_name: "Nigel",
    email: "Riley@gmail.com",
    password: bcrypt.hashSync("Rileypass", 12),
    role: "FREELANCE",
    freelance_info_id: 13,
    telephone_no: "0856138414",
    date_of_birth: new Date("1992-4-11"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: "Natthaya",
    last_name: "Pimpaporn",
    email: "Natthaya@gmail.com",
    password: bcrypt.hashSync("Natthayapass", 12),
    role: "FREELANCE",
    freelance_info_id: 14,
    telephone_no: "0964476991",
    date_of_birth: new Date("1990-7-13"),
    profile_image: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const maxLoop = 10;
for (let i = 0; i < maxLoop; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const user = {
    first_name: firstName,
    last_name: lastName,
    email: firstName + "." + lastName.slice(0, 2) + "@gmail.com",
    password: bcrypt.hashSync("123456", 12),
    role: "USER",
    created_at: new Date(),
    updated_at: new Date(),
  };

  users.push(user);
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
    return await queryInterface.bulkInsert("users", users);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("users", null, {});
  },
};
