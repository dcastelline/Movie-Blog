const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        title: DataTypes.STRING,
    });

    Movie.associate = (models) => {
        Movie.hasMany(models.Comment, {
            onDelete: 'cascade',
        });
    };
    return Movie;
};