'use strict';
module.exports = (sequelize, DataTypes) => {
  const Municipios = sequelize.define('Municipios', {
    idestado: DataTypes.STRING,
    idmunicipio: DataTypes.STRING,
    municipio: DataTypes.STRING
  }, {});
  Municipios.associate = function(models) {
    // associations can be defined here
  };
  return Municipios;
};