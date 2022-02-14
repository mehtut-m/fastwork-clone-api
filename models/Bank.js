module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define(
    "Bank",
    {
      name: {
        type: DataTypes.STRING,
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
  Bank.associate = (models) => {
    Bank.hasOne(models.FreelanceInfo, {
      foreignKey: {
        name: "bankId",
        allowNull: false,
      },
    });
  };
  return Bank;
};
