import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import mysql from 'promise-mysql';

import user from '../database/user';

/**
 * [Database middleware]
 * Automatically creates the database if it doesn't exist.
 */
export default async (req, res, next) => {
    try {
        const configFile = path.join(__dirname, '../../../database.json');

        if (!fs.existsSync(configFile)) {
            next(new Error("Missing database.json file. Read the README file."));
            return;
        }

        const config = JSON.parse(await fs.promise.readFile(configFile, { encoding: 'utf8' }));

        // Cache the connection so that a new connection won't have to
        // be requested every time.
        if (!req.app.locals.conn) {
            // Connect to the database without providing the name of the database.
            // That way, a connection can be established even if the database
            // hasn't been created yet. The database will be created automatically
            // if it doesn't exist.
            const c = _.pickBy(config, (value, key) => key != 'database');
            req.app.locals.conn = await mysql.createConnection(_.extend(c, {
                multipleStatements: true,
                debug: false,
            }));
        }

        const conn = req.app.locals.conn;

        const rows = await conn.query(`
            SELECT COUNT(*) AS c
            FROM INFORMATION_SCHEMA.SCHEMATA
            WHERE SCHEMA_NAME = ?
        `, [config.database]);

        const shouldCreateDatabase = rows[0].c == 0;

        const dbname = '`' + config.database + '`';

        if (shouldCreateDatabase) {
            await conn.query(`CREATE DATABASE ${dbname}`);
            await conn.query(`USE ${dbname}`);

            const createFile = path.join(__dirname, '../../../sql/create.sql');
            const createQuery = await fs.promise.readFile(createFile, { encoding: 'utf8' });
            await conn.query(createQuery);

            const seedFile = path.join(__dirname, '../../../sql/seed.sql');
            const seedQuery = await fs.promise.readFile(seedFile, { encoding: 'utf8' });
            await conn.query(seedQuery);
        } else {
            await conn.query(`USE ${dbname}`);
        }

        req.db = {
            user: user(conn),
        };

        next();
    } catch (err) {
        next(err);
    }
};
