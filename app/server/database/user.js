import bcrypt from 'bcryptjs';

export default function(conn) {
    return {
        async findOneById(id) {
            const rows = await conn.query('SELECT * FROM user WHERE ?', { id });
            return rows[0];
        },

        async findOne(username) {
            const rows = await conn.query('SELECT * FROM user WHERE ?', { username });
            return rows[0];
        },

        async add(role_id, full_name, username, password) {
            const salt = await bcrypt.promise.genSalt(10);
            const hash = await bcrypt.promise.hash(password, salt);

            await conn.query('INSERT INTO user SET ?', {
                role_id: role_id,
                username,
                password: hash,
                full_name,
            });
        },

        async updateRole(id, role_id) {
            await conn.query('UPDATE user SET ? WHERE ?', { role_id }, { id })
        },

        async delete(id) {
            await conn.query('DELETE FROM user WHERE ?', { id });
        },

        async validate(username, password) {
            const user = await this.findOne(username);

            if (!user)
                return false;

            return bcrypt.promise.compare(password, user.password);
        },
    };
};
