'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Payments", [
      {
        currency: "soles",
        status: "pendiente",
        transationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        OrderId: 1
      },
      {
        currency: "pesos",
        status: "En Proceso",
        transationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        OrderId: 2
      },
      {
        currency: "dolares",
        status: "ENTREGADO",
        transationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        OrderId: 3
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Payments", null, {});
  }
};
