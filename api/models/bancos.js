'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bancos = sequelize.define('Bancos', {
    tipo: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  Bancos.associate = function(models) {
    // associations can be defined here
  };
  return Bancos;
};