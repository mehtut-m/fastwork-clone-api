module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      status: {
        type: DataTypes.ENUM("PENDING", "WORKING", "REVIEW", "COMPLETE"),
        defaultValue: "PENDING",
      },
      paymentId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      submitDate: {
        type: DataTypes.DATE,
      },
      completeDate: {
        type: DataTypes.DATE,
      },
      durationCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reviseCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      requirement: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      as: "buyer",
      foreignKey: {
        name: "buyerId",
        allowNull: false,
      },
    });
    Order.belongsTo(models.Post, {
      foreignKey: {
        name: "postId",
        allowNull: false,
      },
    });
    Order.belongsTo(models.Package, {
      foreignKey: {
        name: "packageId",
        allowNull: false,
      },
    });
    Order.hasOne(models.OrderImage, {
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
    });
  };
  return Order;
};
