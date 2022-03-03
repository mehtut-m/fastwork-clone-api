module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      name: {
        type: DataTypes.STRING,
        // allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING(1234),
      },
      instruction: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.ENUM("DRAFT", "SUBMIT", "REJECT", "APPROVE"),
        defaultValue: "DRAFT",
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      underscored: true,
    }
  );
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    Post.belongsTo(models.SubCategories, {
      foreignKey: {
        name: "subCategoryId",
        allowNull: false,
      },
    });
    Post.hasMany(models.PostImage, {
      foreignKey: {
        name: "postId",
        allowNull: false,
      },
    });
    Post.hasMany(models.Order, {
      foreignKey: {
        name: "postId",
        allowNull: false,
      },
    });
    Post.hasMany(models.Package, {
      foreignKey: {
        name: "postId",
        allowNull: false,
      },
    });
    Post.hasMany(models.Review, {
      foreignKey: {
        name: "postId",
        allowNull: false,
      },
    });
  };
  return Post;
};
