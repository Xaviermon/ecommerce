'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("TransationHistories", [
      {
        description: "adquiere item 1",
        timestap: "pendiente",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        description: "adquiere item 2",
        timestap: "pendiente",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      },
      {
        description: "adquiere item 2",
        timestap: "pendiente",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("TransationHistories", null, {});
  }
};
