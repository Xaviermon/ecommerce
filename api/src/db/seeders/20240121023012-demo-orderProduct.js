"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("OrderProducts", [
      {
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        OrderId: 1,
        ProductId: 1
      },
      {
        amount: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        OrderId: 2,
        ProductId: 2
      },
      {
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        OrderId: 3,
        ProductId: 3
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("OrderProducts", null, {});
  },
};
