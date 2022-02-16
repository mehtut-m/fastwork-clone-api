module.exports = (sequelize, DataTypes) => {
  const FreelanceInfo = sequelize.define(
    "FreelanceInfo",
    {
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
      profileDesc: {
        type: DataTypes.STRING,
      },
      citizenCardNo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      imageWithCard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankAccountNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bankAccountImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  FreelanceInfo.associate = (models) => {
    FreelanceInfo.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    FreelanceInfo.belongsTo(models.Address, {
      as: "citizenAddress",
      foreignKey: {
        name: "citizenAddressId",
        allowNull: false,
      },
    });
    FreelanceInfo.belongsTo(models.Address, {
      as: "currentAddress",
      foreignKey: {
        name: "currentAddressId",
        allowNull: false,
      },
    });
    FreelanceInfo.belongsTo(models.Bank, {
      foreignKey: {
        name: "bankId",
        allowNull: false,
      },
    });
  };
  return FreelanceInfo;
};
