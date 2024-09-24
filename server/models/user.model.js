const pool = require('../config/db.config');
const bcrypt = require('bcryptjs');

const createUser = async (username, password) => {
    console.log(username, password)
    const hashedPassword = bcrypt.hashSync(password, 8);
    const result = await pool.query(
        'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING id',
        [username, hashedPassword, 'user']
    );
    return result.rows[0].id;
};

const findUserByUsername = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
};

module.exports = {
    createUser,
    findUserByUsername,
};