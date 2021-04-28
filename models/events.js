'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Events.init({
    id: DataTypes.INTEGER,
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATEONLY,
    evenStart: DataTypes.DATE,
    eventType: DataTypes.STRING,
    devicesId: DataTypes.INTEGER,
    orgId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};