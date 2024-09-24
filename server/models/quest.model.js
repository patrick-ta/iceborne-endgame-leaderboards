const pool = require('../config/db.config');

const getQuests = async () => {
    const result = await pool.query('SELECT * FROM quests');
    return result.rows;
}

module.exports = {
    getQuests,
}