module.exports = (sequelize, DataTypes) => {
  const OrderImage = sequelize.define(
    "OrderImage",
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { underscored: true }
  );
  OrderImage.associate = (models) => {
    OrderImage.belongsTo(models.Order, {
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
    });
  };
  return OrderImage;
};
