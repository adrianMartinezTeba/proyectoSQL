'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [

      {
        price:60,
      name:'mario kart',
      CategoryId:1,
      updatedAt:new Date(),
      createdAt:new Date(),
      description:'aaaaaa'
      },
      {
        price:58,
        name:'god of war',
        CategoryId:1,
        updatedAt:new Date(),
        createdAt:new Date(),
        description:'aaaaaa'
      },
      {
        price:100,
        name:'sofa',
        CategoryId:2,
        updatedAt:new Date(),
        createdAt:new Date(),
        description:'aaaaaa'
      },
      {
        price:100,
        name:'horno',
        CategoryId:1,
        updatedAt:new Date(),
        createdAt:new Date(),
        description:'aaaaaa'
      },
      {
        price:100,
        name:'sillon',
        CategoryId:2,
        updatedAt:new Date(),
        createdAt:new Date(),
        description:'aaaaaa'
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
