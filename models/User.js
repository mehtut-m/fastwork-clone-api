module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      facebookId: {
        type: DataTypes.STRING,
      },
      googleId: {
        type: DataTypes.STRING,
      },
      profileDesc: {
        type: DataTypes.STRING,
      },
      telephoneNo: {
        type: DataTypes.INTEGER,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
      },
      profileImage: {
        type: DataTypes.STRING,
      },
      freelanceInfoId: {
        type: DataTypes.INTEGER,
      },
      role: {
        type: DataTypes.ENUM("USER", "FREELANCE", "ADMIN"),
        defaultValue: "USER",
      },
    },
    {
      underscored: true,
    }
  );
  User.associate = (models) => {
    User.hasMany(models.FreelanceInfo, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    User.hasMany(models.Post, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    User.hasMany(models.Review, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    User.hasMany(models.Order, {
      as: "buyer",
      foreignKey: {
        name: "buyerId",
        allowNull: false,
      },
    });
  };
  return User;
};
