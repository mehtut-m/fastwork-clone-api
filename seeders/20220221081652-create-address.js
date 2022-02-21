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
    return await queryInterface.bulkInsert("addresses", [
      {
        address: "114/5 moo 8",
        sub_district: "matong",
        district: "Phrom Phiram",
        province: "Phitsanulok",
        postcode: "65100",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "912/5 moo 9",
        sub_district: "Chatuchak",
        district: "Khet Chatuchak",
        province: "Bangkok",
        postcode: "10900",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "44/7",
        sub_district: "	Wong Sawang",
        district: "Khet Bang Sue",
        province: "Bangkok",
        postcode: "10800",
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
    return await queryInterface.bulkDelete("addresses", null, {});
  },
};
