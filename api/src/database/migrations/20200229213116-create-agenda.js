'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('agenda', { 
      id: {
        type : Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type : Sequelize.STRING,
        allowNull: false
      },
      email: {
        type : Sequelize.STRING,
        allowNull: false,
        unique : true
      },
      telefone: {
        type : Sequelize.STRING,
        allowNull: false
      },
      github: {
        type : Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
  
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('agenda')
  }
};
