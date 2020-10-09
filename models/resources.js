module.exports = function (sequelize, DataTypes) {
  const Resource = sequelize.define("Resource", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },

    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },

    link: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Resource;
};
