const pool = require('../config/db.config');

const createSpeedrun = async (runner, time, link, weapon, quest, ruleset) => {
    const result = await pool.query(
        'INSERT INTO speedruns (runner, time, weapon, quest_name, ruleset, link) VALUES ($1, $2, $3, $4, $5, $6)',
        [runner, time, weapon, quest, ruleset, link]
    );
    return result.rows;
}

module.exports = {
    createSpeedrun,
}