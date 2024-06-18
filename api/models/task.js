module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
    });
    Task.associate = function(models) {
      Task.belongsTo(models.User);
    };
    return Task;
  };
  