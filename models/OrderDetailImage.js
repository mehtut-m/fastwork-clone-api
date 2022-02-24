module.exports = (sequelize, DataTypes) => {
  const OrderDetailImage = sequelize.define(
    "OrderDetailImage",
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  OrderDetailImage.associate = (models) => {
    OrderDetailImage.belongsTo(models.OrderDetail, {
      foreignKey: {
        name: "orderDetailId",
        allowNull: false,
      },
    });
  };
  return OrderDetailImage;
};
