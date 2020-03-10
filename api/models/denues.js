'use strict';
module.exports = (sequelize, DataTypes) => {
  const Denues = sequelize.define('Denues', {
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero: DataTypes.STRING,
    colonia: DataTypes.STRING,
    cp: DataTypes.STRING,
    idestado: DataTypes.STRING,
    estado: DataTypes.STRING,
    idmunicipio: DataTypes.STRING,
    municipio: DataTypes.STRING,
    lat: DataTypes.STRING,
    lng: DataTypes.STRING
  }, {});
  Denues.associate = function(models) {
    // associations can be defined here
  };
  return Denues;
};