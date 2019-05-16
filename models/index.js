'use strict'

const Sequelize = require('sequelize');
const config = require('../config.json');

module.exports = () => {
    let dbConfig = config.db['development'];

    if (process.env.NODE_ENV !== undefined)
    {
        console.log(config.db.production);
        dbConfig = config.db.production;
    }
    console.log(dbConfig);
    const options = {
        host: dbConfig.options.host,
        dialect: dbConfig.options.dialect,
        logging: dbConfig.options.logging
    };

    const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.pass, options);

    const Repo = require('./repo')(Sequelize, sequelize);
    const Commit = require('./commit')(Sequelize, sequelize);

    Commit.belongsTo(Repo, { foreignKey: 'repoId', onDelete: 'cascade' });

    return {
        repos: Repo,
        commits: Commit,

        Sequelize,
        sequelize,
    };
};