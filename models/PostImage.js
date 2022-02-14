module.exports = (sequelize, DataTypes) => {
  const PostImage = sequelize.define(
    "PostImage",
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    }
  );
  PostImage.associate = (models) => {
    PostImage.belongsTo(models.Post, {
      foreignKey: {
        name: "postId",
        allowNull: false,
      },
    });
  };
  return PostImage;
};
