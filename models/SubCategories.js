module.exports = (sequelize, DataTypes) => {
  const SubCategories = sequelize.define(
    "SubCategories",
    {
      name: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    }
  );
  SubCategories.associate = (models) => {
    SubCategories.hasMany(models.Post, {
      foreignKey: {
        name: "subCategoryId",
        allowNull: false,
      },
    });
    SubCategories.belongsTo(models.Categories, {
      foreignKey: {
        name: "categoryId",
        allowNull: false,
      },
    });
  };
  return SubCategories;
};
