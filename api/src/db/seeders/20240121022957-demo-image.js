'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Images", [
      {
        route: "imagen remera",
        createdAt: new Date(),
        updatedAt: new Date(),
        ProductId: 1
      },
      {
        route: "imagen placa madre",
        createdAt: new Date(),
        updatedAt: new Date(),
        ProductId: 2
      },
      {
        route: "imagen zapatillas",
        createdAt: new Date(),
        updatedAt: new Date(),
        ProductId: 3
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Images", null, {});
  }
};