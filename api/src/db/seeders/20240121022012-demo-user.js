"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "John",
        lastName: "Doe",
        email: "example@example.com",
        password: "contraseña1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        password: 'contraseña2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Xavier',
        lastName: 'Montero',
        email: 'xavier@example.com',
        password: 'contraseña3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
