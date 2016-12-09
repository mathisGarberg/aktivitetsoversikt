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
                JOIN category ON category.id = team.category_id`);
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
            const csv = teamIds.reduce((accumulator, currentValue) => `${accumulator},${currentValue}`);

            const startDate = moment().year(year).week(week).startOf('week').toDate();
            const endDate = moment(startDate).endOf('week').toDate();

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
            `, [startDate, endDate]);
        },

        async addEvent(team_id, t1, t2, description) {
            await conn.query('INSERT INTO event SET ?', {
                team_id,
                t1,
                t2,
                description,
            });
        },

        async deleteEvent(id) {
            await conn.query('DELETE FROM event WHERE ?', { id });
        },
    };
};
