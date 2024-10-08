const pool = require('../config/db.config');

const getQuests = async () => {
    const result = await pool.query('SELECT * FROM quests');
    return result.rows;
}

const getQuestFromParam = async (questNameParam) => {
    const result = await pool.query('SELECT * FROM quests WHERE quest_name_param = $1',
        [questNameParam]
    );
    return result.rows[0].quest_name;
}

module.exports = {
    getQuests,
    getQuestFromParam,
}