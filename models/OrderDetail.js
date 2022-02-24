module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define(
    "OrderDetail",
    {
      submitDate: {
        type: DataTypes.DATE,
      },
      comment: {
        type: DataTypes.TEXT,
      },
    },
    {
      underscored: true,
    }
  );
  OrderDetail.associate = (models) => {
    OrderDetail.belongsTo(models.Order, {
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
    });
    OrderDetail.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    OrderDetail.hasMany(models.OrderDetailImage, {
      foreignKey: {
        name: "orderDetailId",
        allowNull: false,
      },
    });
  };

  return OrderDetail;
};
