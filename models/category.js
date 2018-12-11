'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    'category',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  );
  category.associate = function(models) {
    // associations can be defined here
  };
  return category;
};
