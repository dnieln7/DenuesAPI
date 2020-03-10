'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Censos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idestado: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      idmunicipio: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      actividad: {
        type: Sequelize.STRING
      },
      UE: {
        type: Sequelize.DECIMAL
      },
      H001A: {
        type: Sequelize.DECIMAL
      },
      H010A: {
        type: Sequelize.DECIMAL
      },
      A111A: {
        type: Sequelize.DECIMAL
      },
      A211A: {
        type: Sequelize.DECIMAL
      },
      M091A: {
        type: Sequelize.DECIMAL
      },
      H010D: {
        type: Sequelize.DECIMAL
      },
      H020A: {
        type: Sequelize.DECIMAL
      },
      I000A: {
        type: Sequelize.DECIMAL
      },
      I100A: {
        type: Sequelize.DECIMAL
      },
      I200A: {
        type: Sequelize.DECIMAL
      },
      K000A: {
        type: Sequelize.DECIMAL
      },
      K020A: {
        type: Sequelize.DECIMAL
      },
      K311A: {
        type: Sequelize.DECIMAL
      },
      K040A: {
        type: Sequelize.DECIMAL
      },
      K041A: {
        type: Sequelize.DECIMAL
      },
      K050A: {
        type: Sequelize.DECIMAL
      },
      K620A: {
        type: Sequelize.DECIMAL
      },
      K060A: {
        type: Sequelize.DECIMAL
      },
      K810A: {
        type: Sequelize.DECIMAL
      },
      K090A: {
        type: Sequelize.DECIMAL
      },
      A700A: {
        type: Sequelize.DECIMAL
      },
      M000A: {
        type: Sequelize.DECIMAL
      },
      M020A: {
        type: Sequelize.DECIMAL
      },
      M090A: {
        type: Sequelize.DECIMAL
      },
      A800A: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Censos');
  }
};