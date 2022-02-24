module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      status: {
        type: DataTypes.ENUM("WORKING", "REVIEW", "COMPLETE"),
        defaultValue: "WORKING",
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
      completeDate: {
        type: DataTypes.DATE,
      },
      deadlineDate: {
        type: DataTypes.DATE,
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
    Order.hasMany(models.OrderImage, {
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
    });
    Order.hasMany(models.OrderDetail, {
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
    });
    Order.belongsTo(models.User, {
      as: "seller",
      foreignKey: {
        name: "sellerId",
        allowNull: false,
      },
    });
  };
  return Order;
};
