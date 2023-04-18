'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [

      {
        price:100,
      name:'microondas',
      CategoryId:1,
      updatedAt:new Date(),
      createdAt:new Date()
      },
      {
        price:200,
        name:'lavavajillas',
        CategoryId:1,
        updatedAt:new Date(),
        createdAt:new Date()
      },
      {
        price:100,
        name:'sofa',
        CategoryId:2,
        updatedAt:new Date(),
        createdAt:new Date()
      },
      {
        price:100,
        name:'horno',
        CategoryId:1,
        updatedAt:new Date(),
        createdAt:new Date()
      },
      {
        price:100,
        name:'sillon',
        CategoryId:2,
        updatedAt:new Date(),
        createdAt:new Date()
      }
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
