module.exports = (sequelize, DataTypes) => {
  const FreelanceInfo = sequelize.define(
    "FreelanceInfo",
    {
      citizenCardNo: {
        type: DataTypes.INTEGER,
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
      bankAccointImage: {
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
