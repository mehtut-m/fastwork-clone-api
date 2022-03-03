module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define(
    "Package",
    {
      name: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      description: {
        type: DataTypes.STRING(1234),
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      revise: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
