'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Ropa",
        description: "Hombre",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tecnología",
        description: "Computadoras",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zapatos",
        description: "Nike",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
