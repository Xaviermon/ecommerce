"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Orders", [
      {
        date_order: "2024-01-10",
        total: 300,
        state: "en proceso",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        date_order: "2024-01-11",
        total: 3000,
        state: "finalizado",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      },
      {
        date_order: "2024-01-12",
        total: 3000,
        state: "pendiente",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Orders", null, {});
  },
};
