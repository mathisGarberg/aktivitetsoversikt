export default function(conn) {
    return {
        async findOneById(id) {
            const rows = await conn.query('SELECT * FROM event WHERE ?', { id });
            return rows[0];
        },

        async findFiltered() {
            // TODO: implementere dette etter å ha implementert CalendarFilters.vue
        },

        async add(team_id, t1, t2, description) {
            await conn.query('INSERT INTO event SET ?', {
                team_id,
                t1,
                t2,
                description,
            });
        },

        async delete(id) {
            await conn.query('DELETE FROM user WHERE ?', { id });
        },
    };
};
