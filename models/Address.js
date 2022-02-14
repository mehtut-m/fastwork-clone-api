module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      subDistrict: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      postcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    }
  );
  Address.associate = (models) => {
    Address.hasOne(models.FreelanceInfo, {
      as: "citizenAddress",
      foreignKey: {
        name: "citizenAddressId",
        allowNull: false,
      },
    });
    Address.hasOne(models.FreelanceInfo, {
      as: "currentAddress",
      foreignKey: {
        name: "currentAddressId",
        allowNull: false,
      },
    });
  };
  return Address;
};
