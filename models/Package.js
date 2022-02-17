module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define(
    "Package",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
      },
    },
    {
      underscored: true,
    }
  );
  Package.associate = (models) => {
    Package.belongsTo(models.Post, {
      foreignKey: {
        name: "postId",
        allowNull: false,
      },
    });
    Package.hasMany(models.Order, {
      foreignKey: {
        name: "packageId",
        allowNull: false,
      },
    });
  };
  return Package;
};
