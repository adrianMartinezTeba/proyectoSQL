'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [

      {
      price:59,
      name:'battlefield 2042',
      CategoryId:1,
      img:"https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048",
      trailer:"ASzOzrB-a9E",
      updatedAt:new Date(),
      createdAt:new Date(),
      description:'Juego shooter muy divertido',
      },
      {
        price:58,
        name:'FIFA 2023',
        CategoryId:2,
        img:"https://cdn.cdkeys.com/700x700/media/catalog/product/a/s/asdadad_1.jpg",
        trailer:"o3V-GvvzjE4",
        updatedAt:new Date(),
        createdAt:new Date(),
        description:'Nada mejor que este simulador de futbol'
      },
      {
        price:10,
        name:'CoD Black Ops 2',
        CategoryId:1,
        img:"https://static.wikia.nocookie.net/cod/images/b/ba/BO2_RP_Boxart.png/revision/latest?cb=20130728012855&path-prefix=es",
        trailer:"F6vOWbJ46XU",
        updatedAt:new Date(),
        createdAt:new Date(),
        description:'Un gran juego con el que desconectar un ratinchi'
      },
      {
        price:59,
        name:'NBA 2k23',
        CategoryId:2,
        img:"https://image.api.playstation.com/vulcan/ap/rnd/202206/2200/vLdTCoRLhhHmAAqRypgAOlAI.png",
        trailer:"88PyS2yZdsM",
        updatedAt:new Date(),
        createdAt:new Date(),
        description:'El mejor simulador de baloncesto en el que tendrás horas de diversión'
      },
      {
        price:3,
        name:'Wii Sports',
        CategoryId:2,
        img:"https://static.fnac-static.com/multimedia/Images/ES/MC/d5/9b/0d/891861/1507-1/tsp20130507121437/Wii-Sports-Nintendo-Wii.jpg",
        trailer:"zqaPFAZS1K8",
        updatedAt:new Date(),
        createdAt:new Date(),
        description:'Un juego al que jugar a deportes como tenis,beisbol o bolos'
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
