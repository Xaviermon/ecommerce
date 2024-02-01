'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Remera",
        description: "Remera para hombre color azul",
        price: 150,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        CategoryId: 1
      },
      {
        name: "Placa madre",
        description: "marca AMD",
        price: 1000,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        CategoryId: 2
      },
      {
        name: "zapatillas Jordan",
        description: "marca Nike",
        price: 1500,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        CategoryId: 3
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
