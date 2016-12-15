import moment from 'moment';

export default function(conn) {
    return {
        async findOneEventById(id) {
            const rows = await conn.query('SELECT * FROM event WHERE ?', { id });
            return rows[0];
        },

        async findCategories() {
            return await conn.query('SELECT * FROM category');
        },

        async findTeams() {
            return await conn.query(`
                SELECT team.*, category.name AS category FROM team
                JOIN category ON category.id = team.category_id
            `);
        },

        async findTeamsForCategoryId(categoryId) {
            return await conn.query(`
                SELECT team.*, category.name AS category FROM team
                JOIN category ON category.id = team.category_id AND category.id = ?
            `, [categoryId]);
        },

        async findMaleTeams() {
            return await conn.query(`
                SELECT team.*, category.name AS category FROM team
                JOIN category ON category.id = team.category_id AND team.gender = 'G'`);
        },

        async findFemaleTeams() {
            return await conn.query(`
                SELECT team.*, category.name AS category FROM team
                JOIN category ON category.id = team.category_id AND team.gender = 'J'`);
        },

        async findFilteredEvents(year, week, teamIds) {
            const startDate = moment().year(year).week(week).startOf('week').toDate();
            const endDate = moment(startDate).endOf('week').toDate();

            const csv = teamIds.map(id => '?').reduce((l, r) => `${l},${r}`);

            return await conn.query(`
                SELECT
                    event.*,
                    team.id AS team_id,
                    category.name AS category
                FROM event
                JOIN team
                    ON event.team_id = team.id
                    AND (event.t1 > ?)
                    AND (event.t1 < ?)
                    AND team.id IN (${csv})
                JOIN category
                    ON team.category_id = category.id
            `, [startDate, endDate].concat(teamIds));
        },

        async addEvent(team_id, t1, t2, description) {
            const result = await conn.query('INSERT INTO event SET ?', {
                team_id,
                t1: new Date(t1),
                t2: new Date(t2),
                description,
            });

            return result.insertId;
        },

        async deleteEvent(id) {
            await conn.query('DELETE FROM event WHERE ?', { id });
        },
    };
};
