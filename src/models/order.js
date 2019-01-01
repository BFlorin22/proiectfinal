'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    'order',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      deliveryAddressId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      receiptAddressId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        default: 'received'
      }
    },
    {}
  );
  order.associate = function(models) {
    order.hasMany(models.address, { foreignKey: 'deliveryAddressId' });
    order.hasMany(models.address, { foreignKey: 'receiptAddressId' });
    order.belongsTo(models.user);
    order.belongsToMany(models.product, {
      through: {
        model: models.order_product,
        as: 'products'
      }
    });
  };
  return order;
};
