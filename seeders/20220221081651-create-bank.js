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
    return await queryInterface.bulkInsert("banks", [
      {
        name: "Siam Commercial Bank (SCB)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Krungthai Bank (ธนาคารกรุงไทย)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasikornbank (ธนาคารกสิกรไทย)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Government Savings Bank (ธนาคารออมสิน)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bank of Ayudhya (ธนาคารกรุงศรีอยุธยา)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bangkok Bank (ธนาคารกรุงเทพ)",
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
    return await queryInterface.bulkDelete("banks", null, {});
  },
};
