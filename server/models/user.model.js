const pool = require('../config/db.config');
const bcrypt = require('bcryptjs');

//Function to create a user in the database
const createUser = async (username, password) => {
    console.log(username, password)
    //Encrypt password
    const hashedPassword = bcrypt.hashSync(password, 8);
    //Insert user into users table (default role is 'user')
    const result = await pool.query(
        'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING id',
        [username, hashedPassword, 'user']
    );
    return result.rows[0].id;
};

//Find a user by their username
const findUserByUsername = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
};

module.exports = {
    createUser,
    findUserByUsername,
};