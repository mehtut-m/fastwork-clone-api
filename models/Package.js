module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define(
    "Package",
    {
      name: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
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
