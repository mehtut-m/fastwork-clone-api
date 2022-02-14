module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "Categories",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Categories.associate = (models) => {
    Categories.hasMany(models.SubCategories, {
      foreignKey: {
        name: "categoryId",
        allowNull: false,
      },
    });
  };
  return Categories;
};
