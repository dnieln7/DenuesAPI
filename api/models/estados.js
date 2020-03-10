'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estados = sequelize.define('Estados', {
    idestado: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {});
  Estados.associate = function(models) {
    // associations can be defined here
  };
  return Estados;
};