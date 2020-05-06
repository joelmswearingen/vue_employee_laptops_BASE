'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Example employees
    */

      return queryInterface.bulkInsert('Employees', [
        { name: 'Scranton Slim', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Liver Lips Louie', createdAt: new Date(), updatedAt: new Date()},
        { name: 'Big Jule', createdAt: new Date(), updatedAt: new Date()},
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Delete all example employees
    */
    
    return queryInterface.bulkDelete('Employees', null, {});
    
  }
};
