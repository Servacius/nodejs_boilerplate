'use strict';

const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define('Job', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at : {
            type: DataTypes.DATE,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type:DataTypes.TEXT,
            allowNull: false,
        },
        how_to_apply: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        company_logo: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    },{
        tableName: 'Jobs',
        timestamps: false,
    });

    return Job;
};