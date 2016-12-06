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

        async findFilteredEvents() {
            // TODO: implementere dette etter å ha implementert CalendarFilters.vue
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
