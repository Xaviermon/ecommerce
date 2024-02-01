'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("PaymentMethods", [
      {
        name: "TARJETA",
        createdAt: new Date(),
        updatedAt: new Date(),
        PaymentId: 1
      },
      {
        name: "EFECTIVO",
        createdAt: new Date(),
        updatedAt: new Date(),
        PaymentId: 2
      },
      {
        name: "TRANSACCIÓN",
        createdAt: new Date(),
        updatedAt: new Date(),
        PaymentId: 3
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("PaymentMethods", null, {});
  }
};
