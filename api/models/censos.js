'use strict';
module.exports = (sequelize, DataTypes) => {
  const Censos = sequelize.define('Censos', {
    idestado: DataTypes.STRING,
    estado: DataTypes.STRING,
    idmunicipio: DataTypes.STRING,
    municipio: DataTypes.STRING,
    actividad: DataTypes.STRING,
    UE: DataTypes.DECIMAL,
    H001A: DataTypes.DECIMAL,
    H010A: DataTypes.DECIMAL,
    A111A: DataTypes.DECIMAL,
    A211A: DataTypes.DECIMAL,
    M091A: DataTypes.DECIMAL,
    H010D: DataTypes.DECIMAL,
    H020A: DataTypes.DECIMAL,
    I000A: DataTypes.DECIMAL,
    I100A: DataTypes.DECIMAL,
    I200A: DataTypes.DECIMAL,
    K000A: DataTypes.DECIMAL,
    K020A: DataTypes.DECIMAL,
    K311A: DataTypes.DECIMAL,
    K040A: DataTypes.DECIMAL,
    K041A: DataTypes.DECIMAL,
    K050A: DataTypes.DECIMAL,
    K620A: DataTypes.DECIMAL,
    K060A: DataTypes.DECIMAL,
    K810A: DataTypes.DECIMAL,
    K090A: DataTypes.DECIMAL,
    A700A: DataTypes.DECIMAL,
    M000A: DataTypes.DECIMAL,
    M020A: DataTypes.DECIMAL,
    M090A: DataTypes.DECIMAL,
    A800A: DataTypes.DECIMAL
  }, {});
  Censos.associate = function(models) {
    // associations can be defined here
  };
  return Censos;
};