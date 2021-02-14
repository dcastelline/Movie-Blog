module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      body: {
        type: DataTypes.TEXT,
        len: [1],
      },
    });
  
    Comment.associate = (models) => {
      Comment.belongsTo(models.Movie, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
    return Comment;
};
  