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
        sub_district: "Wong Sawang",
        district: "Khet Bang Sue",
        province: "Bangkok",
        postcode: "10800",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "53/4",
        sub_district: "Din Daeng",
        district: "Din Daeng",
        province: "Bangkok",
        postcode: "10400",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "112/9",
        sub_district: "Wat Saen Suk",
        district: "Min Buri",
        province: "Bangkok",
        postcode: "10510",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "512/5",
        sub_district: "Bang Khun Thian",
        district: "Chom Thong",
        province: "Bangkok",
        postcode: "10150",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "512/5",
        sub_district: "Sai Mai",
        district: "Sai Mai",
        province: "Bangkok",
        postcode: "10220",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "55/41",
        sub_district: "Khlong Thanon",
        district: "Sai Mai",
        province: "Bangkok",
        postcode: "10220",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "21/9",
        sub_district: "Chimphli",
        district: "Taling Chan",
        province: "Bangkok",
        postcode: "10170",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "39/4",
        sub_district: "Khlong Tan",
        district: "Khlong Toei",
        province: "Bangkok",
        postcode: "10110",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "411/4",
        sub_district: "Khlong Toei",
        district: "Khlong Toei",
        province: "Bangkok",
        postcode: "10110",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "87/2",
        sub_district: "Phra Khanong",
        district: "Khlong Toei",
        province: "Bangkok",
        postcode: "10110",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "55/2",
        sub_district: "Bang Na Nuea",
        district: "Bang Na",
        province: "Bangkok",
        postcode: "10260",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "112/4",
        sub_district: "Bang Na Tai",
        district: "Bang Na",
        province: "Bangkok",
        postcode: "10260",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "41/4",
        sub_district: "Phaya Thai",
        district: "Phaya Thai",
        province: "Bangkok",
        postcode: "10400",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: "415",
        sub_district: "Sam Sen Nai",
        district: "Phaya Thai",
        province: "Bangkok",
        postcode: "10400",
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
